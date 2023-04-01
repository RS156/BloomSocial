const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
    unique:true
  },
  email:{
    type: String,
    required: true,   
    maxLength: 50, 
    unique:true
  },
  passwordHash:{
    type: String,
    required: true
  },
  profilePicture:{
    type: String,
    default: ''
  },
  coverPicture:{
    type: String,
    default: ''
  },
  followers:{
    type: Array,
    default: []
  },
  following:{
    type: Array,
    default: []
  },
  isAdmin:{
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

userSchema.set('toJSON',{
  transform : (doc,ret) =>{
    ret.id= ret._id.toString()
    delete ret.passwordHash
    delete ret._id
    delete ret.__v
  }   
   
})

const User =  mongoose.model('User', userSchema)
module.exports = User
