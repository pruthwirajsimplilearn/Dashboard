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
          res.status(200).json({
            success: false,
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
          res.status(200).json({
            success: true,
            message: "User added successfully",
            userResponse
          });
        }
        } 
        catch (e) {
        res.status(500).json({ error: e.message })
      }
    }

    static async login(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        const user = await UserManagementDAO.getUser(email);
        if (!user) {
          res.status(200).json({
            success: false,
            message: "User does not exist",
            user
          });
        }
        else {
          if (bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              res.status(500).json({
                success: false,
                message: "Invalid Credentials"
                });
                }
                else {
                  if (result) {
                    const token = jwt.sign({
                      email: user.email,
                      userId: user._id
                    },
                      process.env.TOKEN_KEY,
                      {
                        expiresIn: "2h"
                      }
                    );
                    user.token = token;
                    res.status(200).json({
                      success: true,
                      message: "Login successful",
                      user
                    });
                  }
                  else {
                    res.status(200).json({
                      success: false,
                      message: "Invalid Password"
                    });
                  }
                }
              }));

        }
      }

    static async loginValidationByCred(req,res,next)
    {
      console.log(req.query);
      try {
        const name = req.query.name;
        const password = req.query.password;
        const userResponse = await UserManagementDAO.loginValidationByCred(name,password)
        res.json(userResponse)
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
    }
}