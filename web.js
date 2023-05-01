const express = require('express')
// const http = require("http")
const app = express()
const PORT = 8001
// const server = http.createServer(app)
// const socketIO = require("socket.io")

// const io = socketIO(server);

app.use(express.static(path.join(__dirname,"resources")))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index')
})


// io.on("connection",(socket) =>{
//   socket.on("chatting",(data)=>{
//       io.emit("chatting",data)
//   })
// })


app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js