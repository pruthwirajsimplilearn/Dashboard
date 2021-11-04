import express from "express"
import UserController from "./userController.js";

const router = express.Router()

router.route('/').get((req,res) => res.send('Hello World'))

router.route('/user').post(UserController.addUser)

export default router