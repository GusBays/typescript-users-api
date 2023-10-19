import 'reflect-metadata'
import { UserBootstrap } from '../Bootstrap/UserBootstrap'
import { container } from 'tsyringe'
import { UserTypeEnum } from '../../Domain/UserTypeEnum'
import { UserService } from '../../Domain/UserService'
import { IUser } from '../../Domain/IUser'
import { DbUserFilter } from '../Db/Adapters/DbUserFilter'
import { RequestUserAdapter } from '../Http/Adapters/RequestUserAdapter'
import { Request } from 'express'

describe('User Module', () => {
    beforeAll(() => {
        new UserBootstrap().handler()
    })

    test('should create users by a csv file', () => {
        const userService = container.resolve<UserService>(UserTypeEnum.SERVICE)
        const file: Express.Multer.File = {
            filename: undefined,
            stream: undefined,
            destination: undefined,
            path: undefined,
            fieldname: 'file',
            originalname: 'users.csv',
            encoding: '7bit',
            mimetype: 'text/csv',
            buffer: Buffer.from(`name,city,country,favorite_sport
        John Doe,New York,USA,Basketball
        Jane Smith,London,UK,Football
        Mike Johnson,Paris,France,Tennis
        Karen Lee,Tokyo,Japan,Swimming
        Tom Brown,Sydney,Australia,Running
        Emma Wilson,Berlin,Germany,Basketball`),
            size: 232
        }

        let message: string
        try {
            userService.importCsv(file)
            message = 'The file was uploaded successfully'
        } catch (error) {
            message = error
        }

        expect(message).toBe('The file was uploaded successfully')
    })

    test('should get list of users', () => {
        const userService = container.resolve<UserService>(UserTypeEnum.SERVICE)
        const users: IUser[] = [
            {
                name: 'John Doe',
                city: 'New York',
                country: 'USA',
                favorite_sport: 'Basketball'
            },
            {
                name: 'Jane Smith',
                city: 'London',
                country: 'UK',
                favorite_sport: 'Football'
            }
        ]

        for (let user of users) {
            userService.create(new RequestUserAdapter({ body: user } as Request))
        }

        const resources = userService.getAll(new DbUserFilter({}))

        expect(resources).toHaveLength(2)
    })

    test('should get filtered list of users', () => {
        const userService = container.resolve<UserService>(UserTypeEnum.SERVICE)
        const users: IUser[] = [
            {
                name: 'John Doe',
                city: 'New York',
                country: 'USA',
                favorite_sport: 'Basketball'
            },
            {
                name: 'Jane Smith',
                city: 'London',
                country: 'UK',
                favorite_sport: 'Football'
            },
            {
                name: 'Gustavo Oliveira',
                city: 'Porto Alegre',
                country: 'Brazil',
                favorite_sport: 'Golf'
            }
        ]

        for (let user of users) {
            userService.create(new RequestUserAdapter({ body: user } as Request))
        }

        const resource = userService.getAll(new DbUserFilter({ queryString: 'porto alegre' }))

        expect(resource).toHaveLength(1)
    })
})
