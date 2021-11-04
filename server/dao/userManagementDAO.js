import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let user

export default class UserManagementDAO {
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

  static async addUser(username,password) {
    try {
      const personDoc = {
        name: username,
        password: password
      }

      return await user.insertOne(personDoc)
    } catch (e) {
      console.error(`Error Adding user: ${e}`)
      return { error: e }
    }
  }
}