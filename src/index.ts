import 'reflect-metadata'
import { Bootstrap } from './Common/Application/Bootstrap'
import { Environment } from './Common/Environment/Environment'
import { Server } from './Common/Server/Server'
import { UserBootstrap } from './Modules/User/Infra/Bootstrap/UserBootstrap'
import { UserRoutes } from './Modules/User/Infra/Http/Routes/users'

Environment.create()
Bootstrap.create([new UserBootstrap()])
Server.create([new UserRoutes()])
