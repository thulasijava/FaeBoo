"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var _1 = require("./");
var ENTITY_STATES = _1.photoRoute.concat(_1.photoPopupRoute);
var FaeBooPhotoModule = /** @class */ (function () {
    function FaeBooPhotoModule() {
    }
    FaeBooPhotoModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [_1.PhotoComponent, _1.PhotoDetailComponent, _1.PhotoUpdateComponent, _1.PhotoDeleteDialogComponent, _1.PhotoDeletePopupComponent],
            entryComponents: [_1.PhotoComponent, _1.PhotoUpdateComponent, _1.PhotoDeleteDialogComponent, _1.PhotoDeletePopupComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooPhotoModule);
    return FaeBooPhotoModule;
}());
exports.FaeBooPhotoModule = FaeBooPhotoModule;
//# sourceMappingURL=photo.module.js.map