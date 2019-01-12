"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("app/core");
var password_component_1 = require("./password.component");
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [core_1.UserRouteAccessService]
};
//# sourceMappingURL=password.route.js.map