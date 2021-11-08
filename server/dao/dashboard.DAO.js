import mongodb from "mongodb"

export default class DashboardDAO {
    constructor(user) {
        console.log("inside dashboarddao");
        const MongoClient = mongodb.MongoClient
        MongoClient.connect(
            process.env.DASHBOARD_DB_URI, {}
        )
            .catch(err => {
                console.error(err.stack)
                process.exit(1)
            })
            .then(async client => {
                if (user) {
                    return;
                }
                user = await client.db(process.env.DASHBOARD_NS).collection("user")
            })
    }
}