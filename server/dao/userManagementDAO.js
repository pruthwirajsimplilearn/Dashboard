import mongodb from "mongodb"
import DashboardDAO from "./dashboard.DAO.js";
const ObjectId = mongodb.ObjectId

let user

export default class UserManagementDAO extends DashboardDAO {
  static async injectDB(conn) {
    if (user) {
      return
    }
    try {
      user = await conn.db(process.env.DASHBOARD_NS).collection("user")
    } catch (e) {
      console.error(`Error: ${e}`)
    }
  }

  static async getUser(email) {
    return await user.findOne({ email: email })
  }

  static async addUser(username, email, password) {
    try {
      const personDoc = {
        name: username,
        email: email,
        password: password
      }

      return await user.insertOne(personDoc)
    } catch (e) {
      console.error(`Error Adding user: ${e}`)
      return { error: e }
    }
  }

  static async loginValidationByCred(name, password) {
    try {
      const query = { name: name, password: password };
      const res = user.findOne(query)
      return res
    } catch (error) {
      console.error(`Error deleting product: ${error}`);
      return { error: error }
    }
  }
}