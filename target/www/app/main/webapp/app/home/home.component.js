"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(principal, loginModalService, eventManager) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-home',
            templateUrl: './home.component.html',
            styleUrls: ['home.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.Principal, core_2.LoginModalService, ng_jhipster_1.JhiEventManager])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map