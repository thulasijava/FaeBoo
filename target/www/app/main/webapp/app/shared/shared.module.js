"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var datepicker_adapter_1 = require("./util/datepicker-adapter");
var _1 = require("./");
var FaeBooSharedModule = /** @class */ (function () {
    function FaeBooSharedModule() {
    }
    FaeBooSharedModule_1 = FaeBooSharedModule;
    FaeBooSharedModule.forRoot = function () {
        return {
            ngModule: FaeBooSharedModule_1
        };
    };
    var FaeBooSharedModule_1;
    FaeBooSharedModule = FaeBooSharedModule_1 = tslib_1.__decorate([
        core_1.NgModule({
            imports: [_1.FaeBooSharedLibsModule, _1.FaeBooSharedCommonModule],
            declarations: [_1.JhiLoginModalComponent, _1.HasAnyAuthorityDirective],
            providers: [{ provide: ng_bootstrap_1.NgbDateAdapter, useClass: datepicker_adapter_1.NgbDateMomentAdapter }],
            entryComponents: [_1.JhiLoginModalComponent],
            exports: [_1.FaeBooSharedCommonModule, _1.JhiLoginModalComponent, _1.HasAnyAuthorityDirective],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooSharedModule);
    return FaeBooSharedModule;
}());
exports.FaeBooSharedModule = FaeBooSharedModule;
//# sourceMappingURL=shared.module.js.map