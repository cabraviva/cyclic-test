const express = require('express')
const app = express()
const os = require('os')

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        totalRAM: os.totalmem(),
        freeRAM: os.freemem(),
        hostname: os.hostname(),
        platform: os.platform(),
        release: os.release(),
        type: os.type(),
        uptime: os.uptime(),
        loadAvg: os.loadavg(),
        networkInterfaces: os.networkInterfaces(),
        userInfo: os.userInfo()
    }, null, 2))
})

app.listen(8080)