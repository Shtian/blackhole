import chalk from 'chalk'
import { Request } from 'express'
import Logger from '../../logger'

const requestSink = (req: Request, timestamp: string, log: Logger): void => {
  log.dump(chalk.blueBright(`📫 ${timestamp} Caught incoming POST request`))

  // Headers
  log.dump(chalk.green('👱‍ Headers:'))
  Object.keys(req.headers).forEach(key => {
    log.dump(`   ${key}: ${req.headers[key]}`)
  })

  // QueryParameters
  log.dump(chalk.green('❔ Query parameters:'))
  Object.keys(req.query).forEach(key => {
    log.dump(`   ${key}: ${req.query[key]}`)
  })

  // Body
  log.dump(chalk.green('🧳  Body:'))
  if (req.body.form) {
    log.dump('   ', JSON.parse(req.body.form))
  } else {
    log.dump('   ', req.body)
  }
}

export default requestSink
