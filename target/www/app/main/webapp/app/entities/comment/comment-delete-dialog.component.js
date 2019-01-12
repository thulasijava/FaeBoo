"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var comment_service_1 = require("./comment.service");
var CommentDeleteDialogComponent = /** @class */ (function () {
    function CommentDeleteDialogComponent(commentService, activeModal, eventManager) {
        this.commentService = commentService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    CommentDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    CommentDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.commentService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'commentListModification',
                content: 'Deleted an comment'
            });
            _this.activeModal.dismiss(true);
        });
    };
    CommentDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-comment-delete-dialog',
            templateUrl: './comment-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [comment_service_1.CommentService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], CommentDeleteDialogComponent);
    return CommentDeleteDialogComponent;
}());
exports.CommentDeleteDialogComponent = CommentDeleteDialogComponent;
var CommentDeletePopupComponent = /** @class */ (function () {
    function CommentDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    CommentDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var comment = _a.comment;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(CommentDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.comment = comment;
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
    CommentDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    CommentDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-comment-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], CommentDeletePopupComponent);
    return CommentDeletePopupComponent;
}());
exports.CommentDeletePopupComponent = CommentDeletePopupComponent;
//# sourceMappingURL=comment-delete-dialog.component.js.map