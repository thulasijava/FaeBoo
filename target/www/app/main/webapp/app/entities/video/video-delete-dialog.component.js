"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var video_service_1 = require("./video.service");
var VideoDeleteDialogComponent = /** @class */ (function () {
    function VideoDeleteDialogComponent(videoService, activeModal, eventManager) {
        this.videoService = videoService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    VideoDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    VideoDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.videoService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'videoListModification',
                content: 'Deleted an video'
            });
            _this.activeModal.dismiss(true);
        });
    };
    VideoDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-video-delete-dialog',
            templateUrl: './video-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [video_service_1.VideoService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], VideoDeleteDialogComponent);
    return VideoDeleteDialogComponent;
}());
exports.VideoDeleteDialogComponent = VideoDeleteDialogComponent;
var VideoDeletePopupComponent = /** @class */ (function () {
    function VideoDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    VideoDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var video = _a.video;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(VideoDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.video = video;
                _this.ngbModalRef.result.then(function (result) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                    _this.ngbModalRef = null;
                }, function (reason) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                    _this.ngbModalRef = null;
                });
            }, 0);
        });
    };
    VideoDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    VideoDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-video-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], VideoDeletePopupComponent);
    return VideoDeletePopupComponent;
}());
exports.VideoDeletePopupComponent = VideoDeletePopupComponent;
//# sourceMappingURL=video-delete-dialog.component.js.map