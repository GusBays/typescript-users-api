"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const UserBootstrap_1 = require("../Bootstrap/UserBootstrap");
const tsyringe_1 = require("tsyringe");
const UserTypeEnum_1 = require("../../Domain/UserTypeEnum");
const DbUserFilter_1 = require("../Db/Adapters/DbUserFilter");
const RequestUserAdapter_1 = require("../Http/Adapters/RequestUserAdapter");
describe('User Module', () => {
    beforeAll(() => {
        new UserBootstrap_1.UserBootstrap().handler();
    });
    test('should create users by a csv file', () => {
        const userService = tsyringe_1.container.resolve(UserTypeEnum_1.UserTypeEnum.SERVICE);
        const file = {
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
        };
        let message;
        try {
            userService.importCsv(file);
            message = 'The file was uploaded successfully';
        }
        catch (error) {
            message = error;
        }
        expect(message).toBe('The file was uploaded successfully');
    });
    test('should get list of users', () => {
        const userService = tsyringe_1.container.resolve(UserTypeEnum_1.UserTypeEnum.SERVICE);
        const users = [
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
        ];
        for (let user of users) {
            userService.create(new RequestUserAdapter_1.RequestUserAdapter({ body: user }));
        }
        const resources = userService.getAll(new DbUserFilter_1.DbUserFilter({}));
        expect(resources).toHaveLength(2);
    });
    test('should get filtered list of users', () => {
        const userService = tsyringe_1.container.resolve(UserTypeEnum_1.UserTypeEnum.SERVICE);
        const users = [
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
        ];
        for (let user of users) {
            userService.create(new RequestUserAdapter_1.RequestUserAdapter({ body: user }));
        }
        const resource = userService.getAll(new DbUserFilter_1.DbUserFilter({ queryString: 'porto alegre' }));
        expect(resource).toHaveLength(1);
    });
});
//# sourceMappingURL=users.test.js.map