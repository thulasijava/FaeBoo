"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var admin_module_1 = require("app/admin/admin.module");
var _1 = require("./");
var ENTITY_STATES = _1.friendRoute.concat(_1.friendPopupRoute);
var FaeBooFriendModule = /** @class */ (function () {
    function FaeBooFriendModule() {
    }
    FaeBooFriendModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, admin_module_1.FaeBooAdminModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [_1.FriendComponent, _1.FriendDetailComponent, _1.FriendUpdateComponent, _1.FriendDeleteDialogComponent, _1.FriendDeletePopupComponent],
            entryComponents: [_1.FriendComponent, _1.FriendUpdateComponent, _1.FriendDeleteDialogComponent, _1.FriendDeletePopupComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooFriendModule);
    return FaeBooFriendModule;
}());
exports.FaeBooFriendModule = FaeBooFriendModule;
//# sourceMappingURL=friend.module.js.map