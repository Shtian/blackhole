import app from './server'
import Logger from './logger'
import chalk from 'chalk'
const port = process.env.PORT || 3030
const logger = new Logger(console.log)

app.listen(port, () => {
  logger.dump(chalk.green(`listening on port ${port}`))
})
