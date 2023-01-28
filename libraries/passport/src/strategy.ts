import { Strategy } from "passport-strategy"
import type { Request } from "express"
import authenticate from "emauth-authenticate"

export interface Options {
  host: string
  port: number
}

export default class EmauthStrategy extends Strategy {
  name: string = "emauth"
  host: string
  port: number
  verify?: (username: string) => void
  
  constructor(options: Options, verify?: (username: string) => void) {
    super()
    this.host = options.host
    this.port = options.port
  }

  authenticate(req: Request) {
    const username = req.body.username as string | undefined
    const password = req.body.password as string | undefined
    if (!username || !password) {
      throw new Error("Missing credentials.")
    }

    authenticate(this.host, this.port, username, password)
      .then(authenticated => {
        if (authenticated) {
          this.success({ username })
          if (this.verify) this.verify(username)
        }
        else this.fail(null, 401)
      })
      .catch(e => this.error(e))
  }
}