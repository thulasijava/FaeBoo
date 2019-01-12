"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor(eventManager) {
        this.eventManager = eventManager;
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.tap(function (event) { }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('/api/account'))))) {
                    _this.eventManager.broadcast({ name: 'faeBooApp.httpError', content: err });
                }
            }
        }));
    };
    ErrorHandlerInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiEventManager])
    ], ErrorHandlerInterceptor);
    return ErrorHandlerInterceptor;
}());
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;
//# sourceMappingURL=errorhandler.interceptor.js.map