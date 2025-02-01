let mongoose=require('mongoose')

let articleSchema=mongoose.Schema({
    articleTitle:{type:String,required:true},
    articleText:{type:String,required:true}
})

mongoose.model("ARTICLE",articleSchema)