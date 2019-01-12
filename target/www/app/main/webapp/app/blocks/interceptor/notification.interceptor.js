"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ng_jhipster_1 = require("ng-jhipster");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var NotificationInterceptor = /** @class */ (function () {
    function NotificationInterceptor(alertService) {
        this.alertService = alertService;
    }
    NotificationInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(operators_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                var arr = event.headers.keys();
                var alert_1 = null;
                var alertParams_1 = null;
                arr.forEach(function (entry) {
                    if (entry.toLowerCase().endsWith('app-alert')) {
                        alert_1 = event.headers.get(entry);
                    }
                    else if (entry.toLowerCase().endsWith('app-params')) {
                        alertParams_1 = event.headers.get(entry);
                    }
                });
                if (alert_1) {
                    if (typeof alert_1 === 'string') {
                        _this.alertService.success(alert_1, { param: alertParams_1 }, null);
                    }
                }
            }
        }, function (err) { }));
    };
    NotificationInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService])
    ], NotificationInterceptor);
    return NotificationInterceptor;
}());
exports.NotificationInterceptor = NotificationInterceptor;
//# sourceMappingURL=notification.interceptor.js.map