import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: {type:String},
    
    taste:{type:Number, },
    cleanliness:{type:Number},
    service:{type:Number},
    ambience:{type:Number},
    price:{type:Number}
})

const feedbackModel = mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);


export default feedbackModel;