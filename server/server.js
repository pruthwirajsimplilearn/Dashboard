import express from "express"
import cors from "cors"
import dashboard from "./api/dashboard.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
});
app.use("/api/dashboard", dashboard)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app