
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res)=>{
    const {username, password} = req.body

    if(!username || !password){
        throw new CustomAPIError('Please provide the username and password', 400)
    }
    console.log(username,password);
    res.send('Fake login/signup/register route')
}

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello John Doe`, secret:`Here is your authorized data ${luckyNumber}`})
}

module.exports = {login, dashboard}