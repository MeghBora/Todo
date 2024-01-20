const jwt = require('jsonwebtoken');

const generateToken = ({ user, keyType }) => {
    var token = '';
    if (keyType === 'Access') {
        token = jwt.sign({ "name": user.name, "email": user.email }, process.env.JWT_ACCESS_SECRET, { expiresIn: "2000s" })
    } else {
        token = jwt.sign({ "name": user.name, "email": user.email }, process.env.JWT_REFRESH_SECRET, { expiresIn: "2d" })
    }
    return token;
}

module.exports = generateToken;