import UserManagementDAO from "../dao/userManagementDAO.js"

export default class UserController {
    static async addUser(req, res, next) {
      try {
        const name = req.body.name
        const password = req.body.password

        const userResponse = await UserManagementDAO.addUser(
          name,
          password
        )
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
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