"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var shared_1 = require("app/shared");
var password_reset_init_service_1 = require("./password-reset-init.service");
var PasswordResetInitComponent = /** @class */ (function () {
    function PasswordResetInitComponent(passwordResetInitService, elementRef, renderer) {
        this.passwordResetInitService = passwordResetInitService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInitService.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.error.type === shared_1.EMAIL_NOT_FOUND_TYPE) {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    PasswordResetInitComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-password-reset-init',
            templateUrl: './password-reset-init.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [password_reset_init_service_1.PasswordResetInitService, core_1.ElementRef, core_1.Renderer])
    ], PasswordResetInitComponent);
    return PasswordResetInitComponent;
}());
exports.PasswordResetInitComponent = PasswordResetInitComponent;
//# sourceMappingURL=password-reset-init.component.js.map