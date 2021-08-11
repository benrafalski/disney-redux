const express = require('express')
const mongoose = require('mongoose')

const Users = require('./models/User.js')

const app = express()
const port = process.env.PORT || 8000


app.use(express.json()) // body parser for json
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT', 'POST')
    next()
})

const connectionURL = 'mongodb://localhost/testDB'
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
let db = mongoose.connection

// check db connection
db.once('open', () => {
    console.log(`connected to ${connectionURL}`)
})

// check for db errors
db.on('error', () => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.status(200).send('redux')
})

app.get('/users', (req, res) => {
    Users.find((err, data) => {
        err 
            ? res.status(500).send(err)
            : res.status(200).send(data)
    })
})

// POST - new user
app.post('/users', (req, res) => {
    const dbUser = req.body;
    
    Users.create(dbUser, (err, data) => {
        err
            ? res.status(500).send(err)
            : res.status(201).send(data)
    })
})
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})