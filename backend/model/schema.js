const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
        
    }]

})

userSchema.pre('save', async function(next){
  
    if (this.isModified('password')) {

        this.password = await bcryptjs.hash(this.password , 12)
        this.cpassword = await bcryptjs.hash(this.cpassword , 12)
    }
    next();

})

userSchema.methods.generateAuthToken = async function(){
    let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({token: token})
    await this.save();
    return token;
}


const User = mongoose.model('USER', userSchema);



module.exports = User;