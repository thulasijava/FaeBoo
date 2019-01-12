"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var friend_service_1 = require("./friend.service");
var core_2 = require("app/core");
var FriendUpdateComponent = /** @class */ (function () {
    function FriendUpdateComponent(jhiAlertService, friendService, userService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.friendService = friendService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    FriendUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var friend = _a.friend;
            _this.friend = friend;
        });
        this.userService.query().subscribe(function (res) {
            _this.users = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    FriendUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    FriendUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.friend.id !== undefined) {
            this.subscribeToSaveResponse(this.friendService.update(this.friend));
        }
        else {
            this.subscribeToSaveResponse(this.friendService.create(this.friend));
        }
    };
    FriendUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    FriendUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    FriendUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    FriendUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    FriendUpdateComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    FriendUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-friend-update',
            templateUrl: './friend-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            friend_service_1.FriendService,
            core_2.UserService,
            router_1.ActivatedRoute])
    ], FriendUpdateComponent);
    return FriendUpdateComponent;
}());
exports.FriendUpdateComponent = FriendUpdateComponent;
//# sourceMappingURL=friend-update.component.js.map