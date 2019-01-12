"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var album_service_1 = require("./album.service");
var AlbumDeleteDialogComponent = /** @class */ (function () {
    function AlbumDeleteDialogComponent(albumService, activeModal, eventManager) {
        this.albumService = albumService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    AlbumDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    AlbumDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.albumService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'albumListModification',
                content: 'Deleted an album'
            });
            _this.activeModal.dismiss(true);
        });
    };
    AlbumDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-album-delete-dialog',
            templateUrl: './album-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [album_service_1.AlbumService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], AlbumDeleteDialogComponent);
    return AlbumDeleteDialogComponent;
}());
exports.AlbumDeleteDialogComponent = AlbumDeleteDialogComponent;
var AlbumDeletePopupComponent = /** @class */ (function () {
    function AlbumDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    AlbumDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var album = _a.album;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(AlbumDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.album = album;
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
    AlbumDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    AlbumDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-album-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], AlbumDeletePopupComponent);
    return AlbumDeletePopupComponent;
}());
exports.AlbumDeletePopupComponent = AlbumDeletePopupComponent;
//# sourceMappingURL=album-delete-dialog.component.js.map