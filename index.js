// Requirements
const express = require('express')
const db = require('./db')

// Routers
const userRouter = require('./users/router')

// Middlewares
const bodyParser = require('body-parser')
const bodyParserMiddleWare = bodyParser.json()
// Connecting with frontend
const cors = require('cors')
const corsMiddleWare = cors()

const app = express()
const port = process.env.PORT || 4000

app
    .use(corsMiddleWare)
    .use(bodyParserMiddleWare)
    .use(userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

db
.sync({force: true})
.then(() => console.log("Database schema updated"))
.catch(console.error)
