"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_webstorage_1 = require("ngx-webstorage");
var app_constants_1 = require("app/app.constants");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(localStorage, sessionStorage) {
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        if (!request || !request.url || (/^http/.test(request.url) && !(app_constants_1.SERVER_API_URL && request.url.startsWith(app_constants_1.SERVER_API_URL)))) {
            return next.handle(request);
        }
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        return next.handle(request);
    };
    AuthInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [ngx_webstorage_1.LocalStorageService, ngx_webstorage_1.SessionStorageService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map