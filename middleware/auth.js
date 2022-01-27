const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')


const authenticationMiddleware = async (req,res,next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided')
    }
    const token = authHeader.split(' ')[1]

    // authenticating and verifying our token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id,username} = decoded
        req.user = {id,username}
        
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorised to acess this route')
    }
}

module.exports = authenticationMiddleware