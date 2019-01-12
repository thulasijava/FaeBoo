"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var ngx_webstorage_1 = require("ngx-webstorage");
var app_constants_1 = require("app/app.constants");
var core_2 = require("app/core");
var profile_service_1 = require("../profiles/profile.service");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(loginService, languageService, languageHelper, sessionStorage, principal, loginModalService, profileService, router) {
        this.loginService = loginService;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
        this.sessionStorage = sessionStorage;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
        this.profileService.getProfileInfo().then(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.trace = function () {
        console.log('here you are');
    };
    NavbarComponent.prototype.changeLanguage = function (languageKey) {
        this.sessionStorage.store('locale', languageKey);
        this.languageService.changeLanguage(languageKey);
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    NavbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['navbar.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.LoginService,
            ng_jhipster_1.JhiLanguageService,
            core_2.JhiLanguageHelper,
            ngx_webstorage_1.SessionStorageService,
            core_2.Principal,
            core_2.LoginModalService,
            profile_service_1.ProfileService,
            router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map