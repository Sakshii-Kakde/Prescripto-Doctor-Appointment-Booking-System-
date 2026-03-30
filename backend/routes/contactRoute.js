import express from "express"
import { sendMessage } from "../controllers/contactController.js"

const contactRouter = express.Router()

contactRouter.post("/send-message", sendMessage)

export default contactRouter