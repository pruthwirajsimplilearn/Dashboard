const jwt=require('jsonwebtoken');

const config=process.env;

const verifyToken=(req,res,next)=>{
    const tocken=req.body.tocken || req.query.tocken || req.headers['x-access-token'];

    if(!tocken){
        res.status(403).send({
            success:false,
            message:'No token provided'
        });
    }
    try{
        const decoded=jwt.verify(tocken,config.TOKEN_KEY);
        req.user=decoded;
    }
    catch(err){
        res.status(403).send({
            success:false,
            message:'Invalid token'
        });
    }
    return next();
};
module.exports=verifyToken;
