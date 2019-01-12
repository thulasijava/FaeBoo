"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var JhiAlertComponent = /** @class */ (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.setClasses = function (alert) {
        var _a;
        return _a = {
                toast: !!alert.toast
            },
            _a[alert.position] = true,
            _a;
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    JhiAlertComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-alert',
            template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"setClasses(alert)\">\n                <ngb-alert *ngIf=\"alert && alert.type && alert.msg\" [type]=\"alert.type\" (close)=\"alert.close(alerts)\">\n                    <pre [innerHTML]=\"alert.msg\"></pre>\n                </ngb-alert>\n            </div>\n        </div>"
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService])
    ], JhiAlertComponent);
    return JhiAlertComponent;
}());
exports.JhiAlertComponent = JhiAlertComponent;
//# sourceMappingURL=alert.component.js.map