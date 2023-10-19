import { config } from 'dotenv'
import { IEnvironment } from './IEnvironment'

export class Environment {
    constructor() {
        config()
    }

    static create(): Environment {
        return new Environment()
    }

    static get(): IEnvironment {
        return {
            app: {
                env: process.env.APP_ENV,
                port: +process.env.PORT,
                hostname: process.env.HOSTNAME
            }
        }
    }
}
