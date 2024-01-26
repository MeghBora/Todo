const jwt = require('jsonwebtoken')
const User = require('../Model/userModel');
const authMiddleWare = async (req, res, next) => {
    try {
        if (!req.cookies || (!req.cookies.access_token && !req.cookies.refresh_token)) {
            return res.status(400).json({ message: 'Unauthorized' });
        }
        const access_token = req.cookies.access_token;
        const refresh_token = req.cookies.refresh_token;

        const decode_access = jwt.decode(access_token, process.env.JWT_ACCESS_SECRET);
        const decode_refresh = jwt.decode(refresh_token, process.env.JWT_REFRESH_SECRET)

        if (decode_access.email !== decode_refresh.email) {
            res.status(400).json({ message: 'Unauthorized' });
            return;
        }
        const user = await User.findOne({email: decode_access.email})
        req.user= user;
        next();
    } catch (err) {
        console.log(err, 'err');
    }
}

module.exports = authMiddleWare;