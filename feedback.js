const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://hmovies957:abin@cluster0.g7tgkvq.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))
let mongoSchema=mongoose.Schema
const FeedbackSchema= new mongoSchema({
    user:String,
    comment:String,
 rs
 
})
var Feed=mongoose.model("Feedback",FeedbackSchema)
module.exports=Feed