import { container } from 'tsyringe'
import { IBootstrap } from '../../../../Common/Contracts/IBootstrap'
import { UserPresenter } from '../Http/Presenters/UserPresenter'
import { UserTypeEnum } from '../../Domain/UserTypeEnum'
import { UserController } from '../../Domain/UserController'
import { UserControllerImpl } from '../Http/Controllers/UserControllerImpl'
import { UserService } from '../../Domain/UserService'
import { UserServiceImpl } from '../../Application/UserServiceImpl'
import { UserRepository } from '../../Domain/UserRepository'
import { UserRepositoryImpl } from '../Db/UserRepositoryImpl'

export class UserBootstrap implements IBootstrap {
    handler(): void {
        container.register<UserPresenter>(UserTypeEnum.PRESENTER, UserPresenter)
        container.register<UserController>(UserTypeEnum.CONTROLLER, UserControllerImpl)
        container.register<UserService>(UserTypeEnum.SERVICE, UserServiceImpl)
        container.register<UserRepository>(UserTypeEnum.REPOSITORY, UserRepositoryImpl)
    }
}
