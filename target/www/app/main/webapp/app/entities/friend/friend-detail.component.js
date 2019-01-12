"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FriendDetailComponent = /** @class */ (function () {
    function FriendDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    FriendDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var friend = _a.friend;
            _this.friend = friend;
        });
    };
    FriendDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    FriendDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-friend-detail',
            templateUrl: './friend-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], FriendDetailComponent);
    return FriendDetailComponent;
}());
exports.FriendDetailComponent = FriendDetailComponent;
//# sourceMappingURL=friend-detail.component.js.map