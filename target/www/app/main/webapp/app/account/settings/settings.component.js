"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(account, principal, languageService, languageHelper) {
        this.account = account;
        this.principal = principal;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.account.save(this.settingsAccount).subscribe(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.principal.identity(true).then(function (account) {
                _this.settingsAccount = _this.copyAccount(account);
            });
            _this.languageService.getCurrent().then(function (current) {
                if (_this.settingsAccount.langKey !== current) {
                    _this.languageService.changeLanguage(_this.settingsAccount.langKey);
                }
            });
        }, function () {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    SettingsComponent.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    SettingsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-settings',
            templateUrl: './settings.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.AccountService,
            core_2.Principal,
            ng_jhipster_1.JhiLanguageService,
            core_2.JhiLanguageHelper])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map