"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var admin_module_1 = require("app/admin/admin.module");
var _1 = require("./");
var ENTITY_STATES = _1.postRoute.concat(_1.postPopupRoute);
var FaeBooPostModule = /** @class */ (function () {
    function FaeBooPostModule() {
    }
    FaeBooPostModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, admin_module_1.FaeBooAdminModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [_1.PostComponent, _1.PostDetailComponent, _1.PostUpdateComponent, _1.PostDeleteDialogComponent, _1.PostDeletePopupComponent],
            entryComponents: [_1.PostComponent, _1.PostUpdateComponent, _1.PostDeleteDialogComponent, _1.PostDeletePopupComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooPostModule);
    return FaeBooPostModule;
}());
exports.FaeBooPostModule = FaeBooPostModule;
//# sourceMappingURL=post.module.js.map