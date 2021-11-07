import express from "express"
import UserController from "./userController.js";

const router = express.Router()

router.get("/",(req,res) => res.send('Hello Coder'))

router.route('/user').post(UserController.addUser)

router.route('/user').get(UserController.login)

export default router