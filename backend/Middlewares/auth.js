const jwt = require('jsonwebtoken')

const authMiddleWare = async(req, res, next) =>{
    if(!req.cookies || (!req.cookies.Access_token && !req.cookies.Refresh_token)){
        return res.status(400).json({message: 'Unauthorized'});
    }
    const access_token = req.cookies.Access_token;
    const refresh_token = req.cookies.refresh_token;

    try{
        const decode_access = jwt.decode(access_token, process.env.JWT_ACCESS_SECRET);
        const decode_refresh = jwt.decode(refresh_token, process.env.JWT_REFRESH_SECRET)

        if(decode_access.email !== decode_refresh.email){
            res.status(400).json({message: 'Unauthorized'});
            return;
        }

        res.json({'decode': decode_access});
    }catch(err){
        console.log(err,'err');
    }
}

module.exports = authMiddleWare;