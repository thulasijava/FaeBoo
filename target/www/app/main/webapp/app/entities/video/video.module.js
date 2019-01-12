"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var _1 = require("./");
var ENTITY_STATES = _1.videoRoute.concat(_1.videoPopupRoute);
var FaeBooVideoModule = /** @class */ (function () {
    function FaeBooVideoModule() {
    }
    FaeBooVideoModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [_1.VideoComponent, _1.VideoDetailComponent, _1.VideoUpdateComponent, _1.VideoDeleteDialogComponent, _1.VideoDeletePopupComponent],
            entryComponents: [_1.VideoComponent, _1.VideoUpdateComponent, _1.VideoDeleteDialogComponent, _1.VideoDeletePopupComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooVideoModule);
    return FaeBooVideoModule;
}());
exports.FaeBooVideoModule = FaeBooVideoModule;
//# sourceMappingURL=video.module.js.map