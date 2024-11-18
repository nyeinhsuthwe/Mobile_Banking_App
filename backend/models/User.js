const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

     name: {
        type : String,
        required : true,
    },
    phone  : {
        type : String,
        required : true,
        unique: true
    },
    password  : {
        type : String,
        required : true,
    },
}, { timestamps : true});

UserSchema.statics.register = async function(name,phone,password) {
    let userExists = await this.findOne({phone});
    if(userExists) {
        throw new Error('user already exists');
    }
    
    // let salt = await bcrypt.genSalt();
    // let hashValue = await bcrypt.hash(password,salt);

    let user = await this.create({
        name,
        phone,
        password
    });
    return user;
}

UserSchema.statics.login = async function(phone,password) {
    let user  = await this.findOne({phone});
    if(!user) {
        throw new Error('user does not exists');
    }
    if(user.password === password){
        return user;
    }
    else{
        throw new Error('Password incorrect');
    }
}

module.exports = mongoose.model("User",UserSchema);