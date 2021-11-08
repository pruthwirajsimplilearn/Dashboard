import mongodb from "mongodb"
import app from "./server.js"
import dotenv from "dotenv"
import UserManagementDAO from "./dao/userManagementDAO.js"

dotenv.config()

const port = process.env.PORT || 8000

const MongoClient = mongodb.MongoClient
MongoClient.connect(
  process.env.DASHBOARD_DB_URI, {}
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await UserManagementDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
  })