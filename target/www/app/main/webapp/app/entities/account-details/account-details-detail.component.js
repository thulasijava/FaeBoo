"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AccountDetailsDetailComponent = /** @class */ (function () {
    function AccountDetailsDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    AccountDetailsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var accountDetails = _a.accountDetails;
            _this.accountDetails = accountDetails;
        });
    };
    AccountDetailsDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    AccountDetailsDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-account-details-detail',
            templateUrl: './account-details-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AccountDetailsDetailComponent);
    return AccountDetailsDetailComponent;
}());
exports.AccountDetailsDetailComponent = AccountDetailsDetailComponent;
//# sourceMappingURL=account-details-detail.component.js.map