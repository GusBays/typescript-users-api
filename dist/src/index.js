"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Bootstrap_1 = require("./Common/Application/Bootstrap");
const Environment_1 = require("./Common/Environment/Environment");
const Server_1 = require("./Common/Server/Server");
const UserBootstrap_1 = require("./Modules/User/Infra/Bootstrap/UserBootstrap");
const users_1 = require("./Modules/User/Infra/Http/Routes/users");
Environment_1.Environment.create();
Bootstrap_1.Bootstrap.create([new UserBootstrap_1.UserBootstrap()]);
Server_1.Server.create([new users_1.UserRoutes()]);
//# sourceMappingURL=index.js.map