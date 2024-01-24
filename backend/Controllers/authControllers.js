const User = require('../Model/userModel.js');
const bcypt = require('bcrypt');
const generateToken = require('../utils/generateToken.js');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "please enter valid files" });
        }

        const userFound = await User.findOne({ email });
        if (userFound) {
            return res.status(400).json({ message: "user Already Exist" });
        }

        const hashedPassword = await bcypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        })
        const saved = await user.save();

        res.status(201).json({ saved })

    } catch (err) {
        console.log('Error in registering the user', err);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'please enter fields properly' });
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "User not Found" });
        }

        const matchedPassword = bcypt.compare(password, user.password);

        if (!matchedPassword) {
            return res.status(400).json({ message: "Either password or email is not valid" });
        }

        const access_token = generateToken({ user, keyType: "Access" });
        const refresh_token = generateToken({ user, keyType: "refresh" });
        res.cookie('access_token', access_token);
        res.cookie('refresh_token', refresh_token);
        
        res.status(200).json({ access_token, refresh_token });

} catch (err) {
        console.log('error in login api ', err);
    }
}

module.exports = { registerUser, loginUser }