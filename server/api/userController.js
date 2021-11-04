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
}