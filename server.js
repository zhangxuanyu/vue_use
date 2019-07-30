const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'src')))

app.listen(8081,'0.0.0.0', () => {
  console.log('App listening at http://localhost:8081')
})