"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var ActivateService = /** @class */ (function () {
    function ActivateService(http) {
        this.http = http;
    }
    ActivateService.prototype.get = function (key) {
        return this.http.get(app_constants_1.SERVER_API_URL + 'api/activate', {
            params: new http_1.HttpParams().set('key', key)
        });
    };
    ActivateService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], ActivateService);
    return ActivateService;
}());
exports.ActivateService = ActivateService;
//# sourceMappingURL=activate.service.js.map