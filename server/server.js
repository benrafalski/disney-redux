const express = require('express')

const app = express()
const port = process.env.PORT || 8000


app.use(express.json()) // body parser for json

app.get('/', (req, res) => {
    res.status(200).send('redux')
})

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})