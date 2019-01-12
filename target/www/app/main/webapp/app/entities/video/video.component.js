"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var video_service_1 = require("./video.service");
var VideoComponent = /** @class */ (function () {
    function VideoComponent(videoService, jhiAlertService, eventManager, principal) {
        this.videoService = videoService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    VideoComponent.prototype.loadAll = function () {
        var _this = this;
        this.videoService.query().subscribe(function (res) {
            _this.videos = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInVideos();
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    VideoComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    VideoComponent.prototype.registerChangeInVideos = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('videoListModification', function (response) { return _this.loadAll(); });
    };
    VideoComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    VideoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-video',
            templateUrl: './video.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [video_service_1.VideoService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map