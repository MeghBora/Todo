const User = require('../Model/userModel.js');
const bcypt = require('bcrypt');
const generateToken = require('../utils/generateToken.js');
const generateOTP = require('../utils/generateOTP.js')
const sendMail = require('../utils/nodemailer.js')




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
        res.cookie('access_token', access_token,{
            httpOnly: true,
            sameSite: "None",
            secure: false,
        });
        res.cookie('refresh_token', refresh_token,{
            httpOnly: true,
            sameSite: "None",
            secure: false,
        });
        
        res.status(200).json({ access_token, refresh_token });

} catch (err) {
        console.log('error in login api ', err);
    }
}

const forgetPassword = async (req, res) =>{
    try {
        const { email } = req.body;
        const user = User.findOne({email});
        if(!user){
            res.status(400).json({message: 'user not found'})
            return ;
        }
        const otp = generateOTP();
        const mailoptions = {
            from: 'boramegh@gmail.com', // sender address
            to: email,
            subject: "Here is the otp to reset your password", // Subject line
            text: JSON.stringify(otp), // plain text body
            html: "<b>enter confirm and reset password </b>", // html body
          }
          const info = await sendMail({mailoptions: mailoptions});

          res.status(200).json({message: info, status: "mail sent successfully", otp: otp})
    } catch (error) {
        console.log('error in forget Password', error);
    }
}

module.exports = { registerUser, loginUser, forgetPassword }