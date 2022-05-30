const express = require('express')
const app = express()
const os = require('os')

// Read every folder in the homedir recursively
const fs = require('fs')
const path = require('path')
const homedir = os.homedir()
const files = fs.readdirSync(homedir)

app.get('/', (req, res) => {
  res.json(files)
})

app.listen(8080)