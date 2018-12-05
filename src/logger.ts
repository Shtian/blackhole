type logObject = Array<any>
type logFn = (...msg: logObject) => void

interface ILog {
  dump: logFn
}

class Logger implements ILog {
  private logFn: logFn
  constructor (logFn: logFn) {
    this.logFn = logFn
  }

  dump (...msg: logObject) {
    this.logFn(...msg)
  }
}

export default Logger
