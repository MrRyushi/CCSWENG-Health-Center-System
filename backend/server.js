require('dotenv').config()

const express = require('express')
const indexRoutes = require('./routes/index')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use(indexRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`)
})