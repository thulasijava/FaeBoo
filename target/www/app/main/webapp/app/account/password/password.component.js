"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var password_service_1 = require("./password.service");
var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(passwordService, principal) {
        this.passwordService = passwordService;
        this.principal = principal;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.newPassword !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.passwordService.save(this.newPassword, this.currentPassword).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-password',
            templateUrl: './password.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [password_service_1.PasswordService, core_2.Principal])
    ], PasswordComponent);
    return PasswordComponent;
}());
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=password.component.js.map