"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var comment_service_1 = require("./comment.service");
var core_2 = require("app/core");
var post_1 = require("app/entities/post");
var CommentUpdateComponent = /** @class */ (function () {
    function CommentUpdateComponent(jhiAlertService, commentService, userService, postService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.commentService = commentService;
        this.userService = userService;
        this.postService = postService;
        this.activatedRoute = activatedRoute;
    }
    CommentUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var comment = _a.comment;
            _this.comment = comment;
        });
        this.userService.query().subscribe(function (res) {
            _this.users = res.body;
        }, function (res) { return _this.onError(res.message); });
        this.postService.query().subscribe(function (res) {
            _this.posts = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    CommentUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    CommentUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.comment.id !== undefined) {
            this.subscribeToSaveResponse(this.commentService.update(this.comment));
        }
        else {
            this.subscribeToSaveResponse(this.commentService.create(this.comment));
        }
    };
    CommentUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    CommentUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    CommentUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    CommentUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    CommentUpdateComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    CommentUpdateComponent.prototype.trackPostById = function (index, item) {
        return item.id;
    };
    CommentUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-comment-update',
            templateUrl: './comment-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            comment_service_1.CommentService,
            core_2.UserService,
            post_1.PostService,
            router_1.ActivatedRoute])
    ], CommentUpdateComponent);
    return CommentUpdateComponent;
}());
exports.CommentUpdateComponent = CommentUpdateComponent;
//# sourceMappingURL=comment-update.component.js.map