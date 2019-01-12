"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var login_service_1 = require("app/core/login/login.service");
var AuthExpiredInterceptor = /** @class */ (function () {
    function AuthExpiredInterceptor(loginService) {
        this.loginService = loginService;
    }
    AuthExpiredInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.tap(function (event) { }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401) {
                    _this.loginService.logout();
                }
            }
        }));
    };
    AuthExpiredInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [login_service_1.LoginService])
    ], AuthExpiredInterceptor);
    return AuthExpiredInterceptor;
}());
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;
//# sourceMappingURL=auth-expired.interceptor.js.map