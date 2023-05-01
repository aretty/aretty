const express = require('express')
const http = require("http")
const app = express()
const path = require("path")
const PORT = 8001
const socketIO = require("socket.io")

const server = http.createServer(app)
const io = socketIO(server);


io.on("connection",(socket) =>{
  socket.on("chatting",(data)=>{
      io.emit("chatting",data)
  })
})

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

server.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js