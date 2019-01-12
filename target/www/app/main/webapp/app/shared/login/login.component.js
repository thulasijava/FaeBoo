"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var login_service_1 = require("app/core/login/login.service");
var state_storage_service_1 = require("app/core/auth/state-storage.service");
var JhiLoginModalComponent = /** @class */ (function () {
    function JhiLoginModalComponent(eventManager, loginService, stateStorageService, elementRef, renderer, router // public activeModal: NgbActiveModal
    ) {
        this.eventManager = eventManager;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.router = router;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.elementRef.nativeElement.querySelector('#username'), 'focus', []); }, 0);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        // this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService
            .login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        })
            .then(function () {
            _this.authenticationError = false;
            // this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || /^\/activate\//.test(_this.router.url) || /^\/reset\//.test(_this.router.url)) {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // since login is succesful, go to stored previousState and clear previousState
            var redirect = _this.stateStorageService.getUrl();
            if (redirect) {
                _this.stateStorageService.storeUrl(null);
                _this.router.navigate([redirect]);
            }
        })
            .catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        // this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        // this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    JhiLoginModalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-login-modal',
            templateUrl: './login.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiEventManager,
            login_service_1.LoginService,
            state_storage_service_1.StateStorageService,
            core_1.ElementRef,
            core_1.Renderer,
            router_1.Router // public activeModal: NgbActiveModal
        ])
    ], JhiLoginModalComponent);
    return JhiLoginModalComponent;
}());
exports.JhiLoginModalComponent = JhiLoginModalComponent;
//# sourceMappingURL=login.component.js.map