"use strict"

const express = require('express')
const http = require("http")
const bodyParser = require("body-parser")
const app = express()

const path = require("path")
const PORT = 8001
const socketIO = require("socket.io")
const page = require("./src/routes/page") //라우팅

const server = http.createServer(app)
const io = socketIO(server);

io.on("connection",(socket) =>{
  socket.on("chatting",(data)=>{
      io.emit("chatting",data)
  })
})

//앱 세팅
app.set('views', __dirname + '/src/views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,"src","public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use("/",page) //use -> 미들웨어 등록

server.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js