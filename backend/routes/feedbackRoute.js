import express from "express"
import { submitFeedback,listFeedback } from "../controllers/feedbackcontroller.js"

const feedbackRouter = express.Router()

feedbackRouter.post("/submit", submitFeedback)
feedbackRouter.get("/list",listFeedback);

export default feedbackRouter;