const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'boramegh@gmail.com',
        pass: 'meghbora@07'
    }
});

const sendMail = async ({ mailoptions }) => {
    try {
        const info = await transporter.sendMail(mailoptions)
        return info;
    } catch (err) {
        console.log('err error in node mailer', err)
    }
}

module.exports = sendMail;