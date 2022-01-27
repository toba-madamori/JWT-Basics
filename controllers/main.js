const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login = async (req,res)=>{
    const {username, password} = req.body

    if(!username || !password){
        throw new BadRequestError('Please provide the username and password')
    }
    // dummy id to send back to the frontend with the jwt
    const id = new Date().getDate()

    // jwt process, try to keep the payload small:better user experience
    // for the jwt secret use long,uncomprehensible and unguessable secret, the below is just for demo
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req,res)=>{
    const {username} = req.user
    console.log(req.user);
    
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello ${username}`, secret:`Here is your authorized data ${luckyNumber}`})

}

module.exports = {login, dashboard}