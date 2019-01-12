"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var post_service_1 = require("./post.service");
var core_2 = require("app/core");
var PostUpdateComponent = /** @class */ (function () {
    function PostUpdateComponent(jhiAlertService, postService, userService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.postService = postService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    PostUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var post = _a.post;
            _this.post = post;
        });
        this.userService.query().subscribe(function (res) {
            _this.users = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    PostUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    PostUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.post.id !== undefined) {
            this.subscribeToSaveResponse(this.postService.update(this.post));
        }
        else {
            this.subscribeToSaveResponse(this.postService.create(this.post));
        }
    };
    PostUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    PostUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    PostUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    PostUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    PostUpdateComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    PostUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-post-update',
            templateUrl: './post-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            post_service_1.PostService,
            core_2.UserService,
            router_1.ActivatedRoute])
    ], PostUpdateComponent);
    return PostUpdateComponent;
}());
exports.PostUpdateComponent = PostUpdateComponent;
//# sourceMappingURL=post-update.component.js.map