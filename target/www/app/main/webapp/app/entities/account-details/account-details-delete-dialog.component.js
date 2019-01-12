"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var account_details_service_1 = require("./account-details.service");
var AccountDetailsDeleteDialogComponent = /** @class */ (function () {
    function AccountDetailsDeleteDialogComponent(accountDetailsService, activeModal, eventManager) {
        this.accountDetailsService = accountDetailsService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    AccountDetailsDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    AccountDetailsDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.accountDetailsService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'accountDetailsListModification',
                content: 'Deleted an accountDetails'
            });
            _this.activeModal.dismiss(true);
        });
    };
    AccountDetailsDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-account-details-delete-dialog',
            templateUrl: './account-details-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [account_details_service_1.AccountDetailsService,
            ng_bootstrap_1.NgbActiveModal,
            ng_jhipster_1.JhiEventManager])
    ], AccountDetailsDeleteDialogComponent);
    return AccountDetailsDeleteDialogComponent;
}());
exports.AccountDetailsDeleteDialogComponent = AccountDetailsDeleteDialogComponent;
var AccountDetailsDeletePopupComponent = /** @class */ (function () {
    function AccountDetailsDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    AccountDetailsDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var accountDetails = _a.accountDetails;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(AccountDetailsDeleteDialogComponent, {
                    size: 'lg',
                    backdrop: 'static'
                });
                _this.ngbModalRef.componentInstance.accountDetails = accountDetails;
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
    AccountDetailsDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    AccountDetailsDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-account-details-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], AccountDetailsDeletePopupComponent);
    return AccountDetailsDeletePopupComponent;
}());
exports.AccountDetailsDeletePopupComponent = AccountDetailsDeletePopupComponent;
//# sourceMappingURL=account-details-delete-dialog.component.js.map