const jwt = require('jsonwebtoken');

const auth = function (req,res,next) {
    // get token from header
    const token = req.header('token');
// if header does not have token,
    if(!token) return res.status(401).json({message: 'Please login!!', error:[],data:{}});
    try {
        // decode the token 
        const decoded = jwt.verify(token,'jwt_secret');
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e);
        res.status(403).json({message: 'Invalid Token!!', error:[],data:{}});
    }
}

module.exports = auth;
