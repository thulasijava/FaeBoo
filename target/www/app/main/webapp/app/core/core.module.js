"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var en_1 = require("@angular/common/locales/en");
var FaeBooCoreModule = /** @class */ (function () {
    function FaeBooCoreModule() {
        common_1.registerLocaleData(en_1.default);
    }
    FaeBooCoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [http_1.HttpClientModule],
            exports: [],
            declarations: [],
            providers: [
                platform_browser_1.Title,
                {
                    provide: core_1.LOCALE_ID,
                    useValue: 'en'
                },
                common_1.DatePipe
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FaeBooCoreModule);
    return FaeBooCoreModule;
}());
exports.FaeBooCoreModule = FaeBooCoreModule;
//# sourceMappingURL=core.module.js.map