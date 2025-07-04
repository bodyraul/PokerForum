const jtw = require("jsonwebtoken");

const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        jtw.verify(token,process.env.PRIVATE_KEY,(err,payload)=>{
            if(err){
                return res.status(401).json("Vous devez être connecté !");
            }
            req.payload =payload;
            next();
        })
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = auth;