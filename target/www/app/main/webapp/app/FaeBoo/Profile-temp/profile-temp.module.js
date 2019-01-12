"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var profile_temp_route_1 = require("app/FaeBoo/Profile-temp/profile-temp.route");
var profile_temp_component_1 = require("app/FaeBoo/Profile-temp/profile-temp.component");
var profile_head_component_1 = require("app/FaeBoo/Profile-head/profile-head.component");
var ProfileTempModule = /** @class */ (function () {
    function ProfileTempModule() {
    }
    ProfileTempModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, router_1.RouterModule.forChild([profile_temp_route_1.PROFILE_ROUTE])],
            declarations: [profile_temp_component_1.ProfileTempComponent, profile_head_component_1.ProfileHeadComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], ProfileTempModule);
    return ProfileTempModule;
}());
exports.ProfileTempModule = ProfileTempModule;
//# sourceMappingURL=profile-temp.module.js.map