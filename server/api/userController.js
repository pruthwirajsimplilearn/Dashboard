import UserManagementDAO from "../dao/userManagementDAO.js"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; 

export default class UserController {
    static async addUser(req, res, next) {
      try {
        const name = req.body.name;
        const email = req.body.email;
        let password = req.body.password;
        if (!name || !email || !password) {
          res.status(400).json({
            message: "Please provide all the required fields"
          });
        }
        password = await bcrypt.hashSync(password, 10);
        const oldUser = await UserManagementDAO.getUser(email);
        if (oldUser) {
          res.status(409).json({
            message: "User already exists"
          });
        }

        else {
          const userResponse = await UserManagementDAO.addUser(
            name,
            email,
            password
          )
          const token = jwt.sign({
            email: userResponse.email,
            userId: userResponse._id
          },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h"
            }
          );
          userResponse.token = token;
          res.status(201).json({
            message: "User added successfully",
            userResponse
          });
        }
        } 
        catch (e) {
        res.status(500).json({ error: e.message })
      }
    }
}