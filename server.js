const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

//引入cors
const core = require('cors')
app.use(core())

//引入users.js
const users = require('./routes/users')
const passport = require('passport')

//连接数据库
const db = require('./config/mongodb').mongoUrl
mongoose.connect(db)
    .then(() => {
        console.log('MongoDB Connected...')
    })
    .catch(err => console.log(err))

const port = process.env.PORT || 8080
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./config/passport')(passport)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/users", users)

app.listen(port, () => {
    console.log('Server is running on port: ' + port)
})