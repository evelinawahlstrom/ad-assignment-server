// Requirements
const express = require('express')
const db = require('./db')

// Routers
const userRouter = require('./users/router')

// Connecting with frontend
// const cors = require('cors')
// const corsMiddleWare = cors()

// Middlewares
const bodyParser = require('body-parser')
const bodyParserMiddleWare = bodyParser.json()

const app = express()
const port = process.env.PORT || 4000

app
.use(bodyParserMiddleWare)
.use(userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))