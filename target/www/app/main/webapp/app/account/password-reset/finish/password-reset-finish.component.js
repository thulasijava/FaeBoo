"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("app/core");
var password_reset_finish_service_1 = require("./password-reset-finish.service");
var PasswordResetFinishComponent = /** @class */ (function () {
    function PasswordResetFinishComponent(passwordResetFinishService, loginModalService, route, elementRef, renderer) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinishService.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    PasswordResetFinishComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-password-reset-finish',
            templateUrl: './password-reset-finish.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [password_reset_finish_service_1.PasswordResetFinishService,
            core_2.LoginModalService,
            router_1.ActivatedRoute,
            core_1.ElementRef,
            core_1.Renderer])
    ], PasswordResetFinishComponent);
    return PasswordResetFinishComponent;
}());
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;
//# sourceMappingURL=password-reset-finish.component.js.map