"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var _1 = require("./");
var FaeBooSharedCommonModule = /** @class */ (function () {
    function FaeBooSharedCommonModule() {
    }
    FaeBooSharedCommonModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [_1.FaeBooSharedLibsModule],
            declarations: [_1.FindLanguageFromKeyPipe, _1.JhiAlertComponent, _1.JhiAlertErrorComponent],
            exports: [_1.FaeBooSharedLibsModule, _1.FindLanguageFromKeyPipe, _1.JhiAlertComponent, _1.JhiAlertErrorComponent]
        })
    ], FaeBooSharedCommonModule);
    return FaeBooSharedCommonModule;
}());
exports.FaeBooSharedCommonModule = FaeBooSharedCommonModule;
//# sourceMappingURL=shared-common.module.js.map