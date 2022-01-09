require('dotenv').config()
const fs = require('fs')
const path = require('path')
const devServer = process.env.BUILD
  ? {}
  : {
      host: 'localhost',
      port: 8080,
      https: true,
      cert: fs.readFileSync(
        path.resolve(process.env.SSL_CERT_FILE || 'localhost.pem')
      ),
      key: fs.readFileSync(
        path.resolve(process.env.SSL_KEY_FILE || 'localhost-key.pem')
      ),
      proxy: 'http://localhost:3000',
    }

module.exports = {
  productionSourceMap: false,
  devServer,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'ScenicSpot',
    },
  },
}
