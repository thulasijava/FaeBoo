"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var account_details_service_1 = require("./account-details.service");
var AccountDetailsComponent = /** @class */ (function () {
    function AccountDetailsComponent(accountDetailsService, jhiAlertService, eventManager, principal) {
        this.accountDetailsService = accountDetailsService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    AccountDetailsComponent.prototype.loadAll = function () {
        var _this = this;
        this.accountDetailsService.query().subscribe(function (res) {
            _this.accountDetails = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    AccountDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInAccountDetails();
    };
    AccountDetailsComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    AccountDetailsComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    AccountDetailsComponent.prototype.registerChangeInAccountDetails = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('accountDetailsListModification', function (response) { return _this.loadAll(); });
    };
    AccountDetailsComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    AccountDetailsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-account-details',
            templateUrl: './account-details.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [account_details_service_1.AccountDetailsService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}());
exports.AccountDetailsComponent = AccountDetailsComponent;
//# sourceMappingURL=account-details.component.js.map