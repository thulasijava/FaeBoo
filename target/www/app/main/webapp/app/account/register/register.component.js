"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("app/shared");
var core_2 = require("app/core");
var register_service_1 = require("./register.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(languageService, loginModalService, registerService, elementRef, renderer) {
        this.languageService = languageService;
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log('Register');
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.languageService.getCurrent().then(function (key) {
                _this.registerAccount.langKey = key;
                _this.registerService.save(_this.registerAccount).subscribe(function () {
                    _this.success = true;
                }, function (response) { return _this.processError(response); });
            });
        }
    };
    RegisterComponent.prototype.openLogin = function () {
        this.modalRef = this.loginModalService.open();
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response.error.type === shared_1.LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response.error.type === shared_1.EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    RegisterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-register',
            templateUrl: './register.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
            core_2.LoginModalService,
            register_service_1.Register,
            core_1.ElementRef,
            core_1.Renderer])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map