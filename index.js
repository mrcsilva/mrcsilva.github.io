const express = require('express')
const app = express()
const port = 80

app.use(express.static('assets'))
app.use(express.static('images'))
app.use(express.static('./'))

app.get('/', (req, res) => {
    res.send('index')
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})