"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var PasswordResetInitService = /** @class */ (function () {
    function PasswordResetInitService(http) {
        this.http = http;
    }
    PasswordResetInitService.prototype.save = function (mail) {
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/account/reset-password/init', mail);
    };
    PasswordResetInitService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], PasswordResetInitService);
    return PasswordResetInitService;
}());
exports.PasswordResetInitService = PasswordResetInitService;
//# sourceMappingURL=password-reset-init.service.js.map