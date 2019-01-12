"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var profile_service_1 = require("./profile.service");
var ProfileDeleteDialogComponent = /** @class */ (function () {
    function ProfileDeleteDialogComponent(profileService, activeModal, eventManager) {
        this.profileService = profileService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    ProfileDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    ProfileDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.profileService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'profileListModification',
                content: 'Deleted an profile'
            });
            _this.activeModal.dismiss(true);
        });
    };
    ProfileDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-profile-delete-dialog',
            templateUrl: './profile-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [profile_service_1.ProfileService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], ProfileDeleteDialogComponent);
    return ProfileDeleteDialogComponent;
}());
exports.ProfileDeleteDialogComponent = ProfileDeleteDialogComponent;
var ProfileDeletePopupComponent = /** @class */ (function () {
    function ProfileDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    ProfileDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var profile = _a.profile;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(ProfileDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.profile = profile;
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
    ProfileDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    ProfileDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-profile-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], ProfileDeletePopupComponent);
    return ProfileDeletePopupComponent;
}());
exports.ProfileDeletePopupComponent = ProfileDeletePopupComponent;
//# sourceMappingURL=profile-delete-dialog.component.js.map