"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("app/core");
var activate_service_1 = require("./activate.service");
var ActivateComponent = /** @class */ (function () {
    function ActivateComponent(activateService, loginModalService, route) {
        this.activateService = activateService;
        this.loginModalService = loginModalService;
        this.route = route;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.activateService.get(params['key']).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        });
    };
    ActivateComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    ActivateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-activate',
            templateUrl: './activate.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [activate_service_1.ActivateService, core_2.LoginModalService, router_1.ActivatedRoute])
    ], ActivateComponent);
    return ActivateComponent;
}());
exports.ActivateComponent = ActivateComponent;
//# sourceMappingURL=activate.component.js.map