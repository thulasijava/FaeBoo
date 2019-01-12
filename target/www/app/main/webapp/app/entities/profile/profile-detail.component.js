"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ProfileDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var profile = _a.profile;
            _this.profile = profile;
        });
    };
    ProfileDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    ProfileDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-profile-detail',
            templateUrl: './profile-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());
exports.ProfileDetailComponent = ProfileDetailComponent;
//# sourceMappingURL=profile-detail.component.js.map