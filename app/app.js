const express = require('express')
const nodePackage = require('../package.json')
const port = process.env.NODE_ENV === 'production' ? 80 : 3000

const config = {
  version: nodePackage.version,
  name: nodePackage.name,
}

const app = express()

app.get('/config', (req, res) => {
  res.json(config)
})

app.listen(port, '0.0.0.0', () => {
  console.log(`srart in ${port} port !`)
})
