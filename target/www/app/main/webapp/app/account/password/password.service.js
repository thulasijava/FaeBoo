"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var PasswordService = /** @class */ (function () {
    function PasswordService(http) {
        this.http = http;
    }
    PasswordService.prototype.save = function (newPassword, currentPassword) {
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/account/change-password', { currentPassword: currentPassword, newPassword: newPassword });
    };
    PasswordService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], PasswordService);
    return PasswordService;
}());
exports.PasswordService = PasswordService;
//# sourceMappingURL=password.service.js.map