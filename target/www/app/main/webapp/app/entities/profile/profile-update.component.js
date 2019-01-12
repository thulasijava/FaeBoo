"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var profile_service_1 = require("./profile.service");
var core_2 = require("app/core");
var ProfileUpdateComponent = /** @class */ (function () {
    function ProfileUpdateComponent(jhiAlertService, profileService, userService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.profileService = profileService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    ProfileUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var profile = _a.profile;
            _this.profile = profile;
        });
        this.userService.query().subscribe(function (res) {
            _this.users = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    ProfileUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    ProfileUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.profile.id !== undefined) {
            this.subscribeToSaveResponse(this.profileService.update(this.profile));
        }
        else {
            this.subscribeToSaveResponse(this.profileService.create(this.profile));
        }
    };
    ProfileUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    ProfileUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    ProfileUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    ProfileUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    ProfileUpdateComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    ProfileUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-profile-update',
            templateUrl: './profile-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            profile_service_1.ProfileService,
            core_2.UserService,
            router_1.ActivatedRoute])
    ], ProfileUpdateComponent);
    return ProfileUpdateComponent;
}());
exports.ProfileUpdateComponent = ProfileUpdateComponent;
//# sourceMappingURL=profile-update.component.js.map