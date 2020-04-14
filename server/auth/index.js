import * as utils from './utils'
import * as strategies from './strategies'

const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args)

//middleware function
const initialiseAuthentication = app => {
  utils.setup()

  pipe(strategies.JWTStrategy)(app)
}

export { utils, initialiseAuthentication, strategies }