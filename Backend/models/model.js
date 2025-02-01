let mongoose=require('mongoose');


let userSchema=mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    username:{type:String,required:true},
})

mongoose.model("USER",userSchema)