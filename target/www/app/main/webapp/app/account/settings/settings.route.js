"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("app/core");
var settings_component_1 = require("./settings.component");
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.settings'
    },
    canActivate: [core_1.UserRouteAccessService]
};
//# sourceMappingURL=settings.route.js.map