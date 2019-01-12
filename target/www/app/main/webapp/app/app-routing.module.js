"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var layouts_1 = require("./layouts");
var app_constants_1 = require("app/app.constants");
var LAYOUT_ROUTES = [layouts_1.navbarRoute].concat(layouts_1.errorRoute);
var FaeBooAppRoutingModule = /** @class */ (function () {
    function FaeBooAppRoutingModule() {
    }
    FaeBooAppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(LAYOUT_ROUTES.concat([
                    {
                        path: 'admin',
                        loadChildren: './admin/admin.module#FaeBooAdminModule'
                    }
                ]), { useHash: true, enableTracing: app_constants_1.DEBUG_INFO_ENABLED })
            ],
            exports: [router_1.RouterModule]
        })
    ], FaeBooAppRoutingModule);
    return FaeBooAppRoutingModule;
}());
exports.FaeBooAppRoutingModule = FaeBooAppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map