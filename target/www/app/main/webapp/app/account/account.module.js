"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var _1 = require("./");
var FaeBooAccountModule = /** @class */ (function () {
    function FaeBooAccountModule() {
    }
    FaeBooAccountModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, router_1.RouterModule.forChild(_1.accountState)],
            declarations: [
                _1.ActivateComponent,
                _1.RegisterComponent,
                _1.PasswordComponent,
                _1.PasswordStrengthBarComponent,
                _1.PasswordResetInitComponent,
                _1.PasswordResetFinishComponent,
                _1.SettingsComponent
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooAccountModule);
    return FaeBooAccountModule;
}());
exports.FaeBooAccountModule = FaeBooAccountModule;
//# sourceMappingURL=account.module.js.map