"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("app/core");
var UserMgmtUpdateComponent = /** @class */ (function () {
    function UserMgmtUpdateComponent(languageHelper, userService, route, router) {
        this.languageHelper = languageHelper;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UserMgmtUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.route.data.subscribe(function (_a) {
            var user = _a.user;
            _this.user = user.body ? user.body : user;
        });
        this.authorities = [];
        this.userService.authorities().subscribe(function (authorities) {
            _this.authorities = authorities;
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    UserMgmtUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    UserMgmtUpdateComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
        else {
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtUpdateComponent.prototype.onSaveSuccess = function (result) {
        this.isSaving = false;
        this.previousState();
    };
    UserMgmtUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    UserMgmtUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-user-mgmt-update',
            templateUrl: './user-management-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.JhiLanguageHelper,
            core_2.UserService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], UserMgmtUpdateComponent);
    return UserMgmtUpdateComponent;
}());
exports.UserMgmtUpdateComponent = UserMgmtUpdateComponent;
//# sourceMappingURL=user-management-update.component.js.map