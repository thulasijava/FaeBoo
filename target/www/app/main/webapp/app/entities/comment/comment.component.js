"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var comment_service_1 = require("./comment.service");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService, jhiAlertService, eventManager, principal) {
        this.commentService = commentService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    CommentComponent.prototype.loadAll = function () {
        var _this = this;
        this.commentService.query().subscribe(function (res) {
            _this.comments = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInComments();
    };
    CommentComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    CommentComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    CommentComponent.prototype.registerChangeInComments = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('commentListModification', function (response) { return _this.loadAll(); });
    };
    CommentComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    CommentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-comment',
            templateUrl: './comment.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [comment_service_1.CommentService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map