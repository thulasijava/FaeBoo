"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var video_service_1 = require("./video.service");
var post_1 = require("app/entities/post");
var VideoUpdateComponent = /** @class */ (function () {
    function VideoUpdateComponent(jhiAlertService, videoService, postService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.videoService = videoService;
        this.postService = postService;
        this.activatedRoute = activatedRoute;
    }
    VideoUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var video = _a.video;
            _this.video = video;
        });
        this.postService.query().subscribe(function (res) {
            _this.posts = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    VideoUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    VideoUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.video.id !== undefined) {
            this.subscribeToSaveResponse(this.videoService.update(this.video));
        }
        else {
            this.subscribeToSaveResponse(this.videoService.create(this.video));
        }
    };
    VideoUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    VideoUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    VideoUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    VideoUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    VideoUpdateComponent.prototype.trackPostById = function (index, item) {
        return item.id;
    };
    VideoUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-video-update',
            templateUrl: './video-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            video_service_1.VideoService,
            post_1.PostService,
            router_1.ActivatedRoute])
    ], VideoUpdateComponent);
    return VideoUpdateComponent;
}());
exports.VideoUpdateComponent = VideoUpdateComponent;
//# sourceMappingURL=video-update.component.js.map