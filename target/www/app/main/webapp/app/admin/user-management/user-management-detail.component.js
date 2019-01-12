"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var UserMgmtDetailComponent = /** @class */ (function () {
    function UserMgmtDetailComponent(route) {
        this.route = route;
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var user = _a.user;
            _this.user = user.body ? user.body : user;
        });
    };
    UserMgmtDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-user-mgmt-detail',
            templateUrl: './user-management-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], UserMgmtDetailComponent);
    return UserMgmtDetailComponent;
}());
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;
//# sourceMappingURL=user-management-detail.component.js.map