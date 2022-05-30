const express = require('express')
const app = express()
const os = require('os')

function runningWithRootRights() {
    return process.getuid && process.getuid() === 0 ? true : false
}

app.get('/', (req, res) => {
    if (runningWithRootRights()) {
        res.send('<h1>Hello, root!</h1>')
    } else {
        res.send('<h1>Hello, user!</h1>')
    }
})

app.listen(8080, () => {
    console.log(`⚡️  Server is running on port 8080 on ${os.hostname()}`)
})