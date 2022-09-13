const express = require("express")
const app = express()
const mongoose = require("mongoose")
// const multer = require("multer")
const checkMongoStatus = require("./utils/check-mongo-status")
const PORT = process.env.PORT || 8000
require("dotenv/config")

// Connect datbase and create collection
mongoose
    .connect(
        process.env.DATABASE_URI,
        { useNewUrlParser: true },
        { useUnifiedTopology: true },
        checkMongoStatus.getStatus()
    )
    .catch((error) => {
        console.log(error)
    })

// Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Import Routes
// const eventsRoute = require("./routes/events/events-route")
// const projectsRoute = require("./routes/projects/projects-route")
// const tutorialsRoute = require("./routes/tutorials/tutorials-route")
// const readingsRoute = require("./routes/readings/readings-route")
// const organizationsRoute = require("./routes/organizations/orgs-route")

// Use Routes

// Run server
app.listen(PORT, () => {
    console.log(`Running backend server on: http://127.0.0.1:${PORT}`)
})
