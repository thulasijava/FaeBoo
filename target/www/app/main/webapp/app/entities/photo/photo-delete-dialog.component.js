"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var photo_service_1 = require("./photo.service");
var PhotoDeleteDialogComponent = /** @class */ (function () {
    function PhotoDeleteDialogComponent(photoService, activeModal, eventManager) {
        this.photoService = photoService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    PhotoDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    PhotoDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.photoService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'photoListModification',
                content: 'Deleted an photo'
            });
            _this.activeModal.dismiss(true);
        });
    };
    PhotoDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-photo-delete-dialog',
            templateUrl: './photo-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [photo_service_1.PhotoService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], PhotoDeleteDialogComponent);
    return PhotoDeleteDialogComponent;
}());
exports.PhotoDeleteDialogComponent = PhotoDeleteDialogComponent;
var PhotoDeletePopupComponent = /** @class */ (function () {
    function PhotoDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    PhotoDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var photo = _a.photo;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(PhotoDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.photo = photo;
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
    PhotoDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    PhotoDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-photo-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], PhotoDeletePopupComponent);
    return PhotoDeletePopupComponent;
}());
exports.PhotoDeletePopupComponent = PhotoDeletePopupComponent;
//# sourceMappingURL=photo-delete-dialog.component.js.map