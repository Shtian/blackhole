import express from 'express'
const app = express()
const port = process.env.PORT || 3030
import chalk from 'chalk'
const log = console.log

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/post', (req, res) => {
  log(req.body)
  res.send({ message: 'OK' })
})

app.listen(port, () => {
  log(chalk.green(`listening on port ${port}`))
})
