"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_reset_init_component_1 = require("./password-reset-init.component");
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    }
};
//# sourceMappingURL=password-reset-init.route.js.map