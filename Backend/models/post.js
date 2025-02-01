let mongoose=require('mongoose')
let {ObjectId}=mongoose.Schema.Types


let postSchema=mongoose.Schema({
    textbody:{type:String,required:true},
    postedBy:{type:ObjectId,ref:"USER"},
    createdAt:{type:Date,default:Date.now()}
})

mongoose.model("POST",postSchema)