const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Cyclic seems to be awesome!'
    })
})

app.listen(8080)