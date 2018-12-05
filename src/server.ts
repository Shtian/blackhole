import express from 'express'
const app = express()
import requestSink from './sinks/post/postSink'
import multer from 'multer'
import Logger from './logger'
const upload = multer({ dest: 'uploads/' })
const logger = new Logger(console.log)

// Adding middleware to parse request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Add CORS header middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/post', upload.any(), (req, res) => {
  const date = new Date()
  const timestamp = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`
  requestSink(req, timestamp, logger)

  res.json({ message: 'OK' })
})

export default app
