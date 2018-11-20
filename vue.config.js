const express = require('express')
const app = express()

//mock json 文件
var data = require('./mock/home.json')

var router = express.Router()
app.use('/api', router)

module.exports = {
  // 基本路径
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  devServer: {
    port: 8888,
    open: true,
    before(app) {
      app.get('/api/home', function(req, res) {
        res.json(data)
      })
    }
  }
}

