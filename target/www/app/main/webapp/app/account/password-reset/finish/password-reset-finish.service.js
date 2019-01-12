"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var PasswordResetFinishService = /** @class */ (function () {
    function PasswordResetFinishService(http) {
        this.http = http;
    }
    PasswordResetFinishService.prototype.save = function (keyAndPassword) {
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/account/reset-password/finish', keyAndPassword);
    };
    PasswordResetFinishService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], PasswordResetFinishService);
    return PasswordResetFinishService;
}());
exports.PasswordResetFinishService = PasswordResetFinishService;
//# sourceMappingURL=password-reset-finish.service.js.map