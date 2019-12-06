// Requirements
const express = require('express')
const db = require('./db')

// Routers
const userRouter = require('./users/router')
const permutationRouter = require ('./permutations/router')

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
    .use(permutationRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// force: true as long as development is in process
db
.sync({force: true})
.then(() => console.log("Database schema updated"))
.catch(console.error)
