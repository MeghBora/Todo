const jwt = require('jsonwebtoken')

const authMiddleWare = async(req, res, next) =>{
    if(!req.cookies || !req.cookies.token){
        return res.status(400).json({message: 'Unauthorized'});
    }
    const token = req.cookies.token;
    try{
        const decode = jwt.decode(token, process.env.JWT_ACCESS_SECRET)
        console.log(decode);

    }catch(err){
        console.log(err,'err');
    }
}

module.exports = authMiddleWare;