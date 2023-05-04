const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefData = require('./data/chefdata.json')

app.use(cors())

app.get(('/'), (req, res) => {
    res.send('hello world')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})

app.get('/chefData/:id', (req, res) => {
    const id = req.params.id;
    const currentData = chefData.find(d => d.id == id)
    res.send(currentData)

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})