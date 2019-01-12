"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var friend_service_1 = require("./friend.service");
var FriendDeleteDialogComponent = /** @class */ (function () {
    function FriendDeleteDialogComponent(friendService, activeModal, eventManager) {
        this.friendService = friendService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    FriendDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    FriendDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.friendService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'friendListModification',
                content: 'Deleted an friend'
            });
            _this.activeModal.dismiss(true);
        });
    };
    FriendDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-friend-delete-dialog',
            templateUrl: './friend-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [friend_service_1.FriendService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], FriendDeleteDialogComponent);
    return FriendDeleteDialogComponent;
}());
exports.FriendDeleteDialogComponent = FriendDeleteDialogComponent;
var FriendDeletePopupComponent = /** @class */ (function () {
    function FriendDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    FriendDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var friend = _a.friend;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(FriendDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.friend = friend;
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
    FriendDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    FriendDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-friend-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], FriendDeletePopupComponent);
    return FriendDeletePopupComponent;
}());
exports.FriendDeletePopupComponent = FriendDeletePopupComponent;
//# sourceMappingURL=friend-delete-dialog.component.js.map