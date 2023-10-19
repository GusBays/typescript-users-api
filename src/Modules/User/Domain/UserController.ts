import { Request, Response } from 'express'

export interface UserController {
    store(req: Request, res: Response): Response
    index(req: Request, res: Response): Response
    importCsv(req: Request, res: Response): Response
}
