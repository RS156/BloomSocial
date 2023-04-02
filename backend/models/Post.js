const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true
    },
    desc:{
        type: String,
       max:500
    },
    img:{
        type: String,      
    },
    likes:{
        type: Array,
       default:[]
    }  
}, {
  timestamps: true
});

postSchema.set('toJSON',{
  transform : (doc,ret) =>{
    ret.id= ret._id.toString()    
    delete ret._id
    delete ret.__v
  }   
   
})

const Post =  mongoose.model('Post', postSchema)
module.exports = Post
