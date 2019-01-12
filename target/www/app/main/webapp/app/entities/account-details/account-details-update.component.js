"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var account_details_service_1 = require("./account-details.service");
var core_2 = require("app/core");
var AccountDetailsUpdateComponent = /** @class */ (function () {
    function AccountDetailsUpdateComponent(jhiAlertService, accountDetailsService, userService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.accountDetailsService = accountDetailsService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    AccountDetailsUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var accountDetails = _a.accountDetails;
            _this.accountDetails = accountDetails;
        });
        this.userService.query().subscribe(function (res) {
            _this.users = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    AccountDetailsUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    AccountDetailsUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.accountDetails.id !== undefined) {
            this.subscribeToSaveResponse(this.accountDetailsService.update(this.accountDetails));
        }
        else {
            this.subscribeToSaveResponse(this.accountDetailsService.create(this.accountDetails));
        }
    };
    AccountDetailsUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    AccountDetailsUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    AccountDetailsUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    AccountDetailsUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    AccountDetailsUpdateComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    AccountDetailsUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-account-details-update',
            templateUrl: './account-details-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            account_details_service_1.AccountDetailsService,
            core_2.UserService,
            router_1.ActivatedRoute])
    ], AccountDetailsUpdateComponent);
    return AccountDetailsUpdateComponent;
}());
exports.AccountDetailsUpdateComponent = AccountDetailsUpdateComponent;
//# sourceMappingURL=account-details-update.component.js.map