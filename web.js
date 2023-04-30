const express = require('express')
const http = require("http")
const app = express()
const PORT = 8001
const server = http.createServer(app)


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index')
})
server.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
// web.js