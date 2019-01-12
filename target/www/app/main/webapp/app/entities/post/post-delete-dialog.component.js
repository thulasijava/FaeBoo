"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var post_service_1 = require("./post.service");
var PostDeleteDialogComponent = /** @class */ (function () {
    function PostDeleteDialogComponent(postService, activeModal, eventManager) {
        this.postService = postService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    PostDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    PostDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.postService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'postListModification',
                content: 'Deleted an post'
            });
            _this.activeModal.dismiss(true);
        });
    };
    PostDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-post-delete-dialog',
            templateUrl: './post-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [post_service_1.PostService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], PostDeleteDialogComponent);
    return PostDeleteDialogComponent;
}());
exports.PostDeleteDialogComponent = PostDeleteDialogComponent;
var PostDeletePopupComponent = /** @class */ (function () {
    function PostDeletePopupComponent(activatedRoute, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
    }
    PostDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var post = _a.post;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(PostDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.post = post;
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
    PostDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    PostDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-post-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, ng_bootstrap_1.NgbModal])
    ], PostDeletePopupComponent);
    return PostDeletePopupComponent;
}());
exports.PostDeletePopupComponent = PostDeletePopupComponent;
//# sourceMappingURL=post-delete-dialog.component.js.map