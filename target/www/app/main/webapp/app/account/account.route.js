"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_route_1 = require("app/shared/login/login.route");
var _1 = require("./");
var ACCOUNT_ROUTES = [
    _1.activateRoute,
    _1.passwordRoute,
    _1.passwordResetFinishRoute,
    _1.passwordResetInitRoute,
    _1.registerRoute,
    _1.settingsRoute,
    login_route_1.loginRoute
];
exports.accountState = [
    {
        path: '',
        children: ACCOUNT_ROUTES
    }
];
//# sourceMappingURL=account.route.js.map