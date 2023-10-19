import { IBootstrap } from '../Contracts/IBootstrap'

export class Bootstrap {
    constructor(bootstraps: IBootstrap[]) {
        for (let bootstrap of bootstraps) {
            bootstrap.handler()
        }
    }

    static create(bootstraps: IBootstrap[]): Bootstrap {
        return new Bootstrap(bootstraps)
    }
}
