const User = require('../Model/userModel.js');
const bcypt = require('bcrypt');
const generateToken = require('../utils/generateToken.js');
const generateOTP = require('../utils/generateOTP.js')
const sendMail = require('../utils/nodemailer.js');
const ErrorHandler = require('../utils/errorHandler.js');
const AsyncErrorHandler = require('../utils/asyncError.js');




const registerUser = AsyncErrorHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(new ErrorHandler('Please Enter Fields Properly', 400))
    }
    const userFound = await User.findOne({ email });
    if (userFound) {
        return next(new ErrorHandler('User Already Exists', 400))
    }

    const hashedPassword = await bcypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
    })
    const saved = await user.save();

    res.status(201).json({ saved })
})

const loginUser = AsyncErrorHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler('Please Enter Fields Properly', 400))
    }

    const user = await User.findOne({ email })

    if (!user) {
        return next(new ErrorHandler('User not Found',400))
    }

    const matchedPassword = bcypt.compare(password, user.password);

    if (!matchedPassword) {
        return next(new ErrorHandler("Either Email or Password is not valid", 400))
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

}
);
const forgetPassword = AsyncErrorHandler(async (req, res, next) =>{
    const { email } = req.body;
    const user = User.findOne({email});
    if(!user){
        next(new ErrorHandler("User Not Found", 400))
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
});

module.exports = { registerUser, loginUser, forgetPassword }