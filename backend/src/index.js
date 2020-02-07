

const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan")
const routes = require('./routes')
const http = require('http')
const cors = require('cors')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb://nicolas:qawsedrf@cluster0-shard-00-00-sfqql.mongodb.net:27017,cluster0-shard-00-01-sfqql.mongodb.net:27017,cluster0-shard-00-02-sfqql.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(morgan("dev"))

server.listen(3535)



