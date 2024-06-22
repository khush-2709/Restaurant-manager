import feedbackModel from '../models/feedbackmodel.js';
import feedbackmodel from '../models/feedbackmodel.js'

const submitFeedback = async (req, res) => {

    

    const feedback = new feedbackmodel({
        name: req.body.name,
        taste: req.body.taste,
        price: req.body.price,
        ambience:req.body.ambience,
        service:req.body.service,
        cleanliness:req.body.cleanliness,
            })
    try {
        await feedback.save();
        res.json({ success: true, message: "Feedback Submitted" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const listFeedback = async (req, res) => {
    try {
        const feedbacks = await feedbackModel.find({});
        res.json({ success: true, data: feedbacks })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


export {submitFeedback,listFeedback}