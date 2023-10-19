import express from 'express'
import { HttpRouter } from './Router/HttpRouter'
import { Environment } from '../Environment/Environment'

export class Server {
    private config = Environment.get().app

    constructor(routes: HttpRouter[]) {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))

        for (let route of routes) {
            app.use(route.getEndpoints())
        }

        const protocol = this.config.env === 'local' ? 'http://' : 'https://'
        const url = protocol + this.config.hostname + ':' + this.config.port

        app.listen(this.config.port || 3000, this.config.hostname, () =>
            console.log(`App runing on: ${url}`)
        )
    }

    static create(routes: HttpRouter[]): Server {
        return new Server(routes)
    }
}
