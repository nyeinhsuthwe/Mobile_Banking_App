const User = require('../models/User');
// const bcrypt = require('bcrypt')
const createToken = require('../helper/createToken')

const userController = {
    login: async(req,res)=>{
        try{
            let{phone, password} = req.body;
            let user = await User.login(phone,password);
            
            let token = createToken(user._id)
            res.cookie('jwt',token, {httpOnly : true, maxAge: 3*24*60*60*1000});
            return res.json({user, token});
    
           }catch(e){
            return res.status(400).json({error : e.message})
           }
    },
    register:async(req,res)=>{
       try{
        let{name , phone, password} = req.body;
        let user = await User.register(name,phone,password);
        
        let token = createToken(user._id)
        res.cookie('jwt',token, {httpOnly : true, maxAge: 3*24*60*60*1000});
        return res.json({user, token});

       }catch(e){
        return res.status(400).json({error : e.message})
       }
    },
    
}

module.exports = userController;