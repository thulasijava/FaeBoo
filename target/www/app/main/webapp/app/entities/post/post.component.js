"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var post_service_1 = require("./post.service");
var PostComponent = /** @class */ (function () {
    function PostComponent(postService, jhiAlertService, eventManager, principal) {
        this.postService = postService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    PostComponent.prototype.loadAll = function () {
        var _this = this;
        this.postService.query().subscribe(function (res) {
            _this.posts = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInPosts();
    };
    PostComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    PostComponent.prototype.trackId = function (index, item) {
        console.log(item);
        return item.id;
    };
    PostComponent.prototype.registerChangeInPosts = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('postListModification', function (response) { return _this.loadAll(); });
    };
    PostComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    PostComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-post',
            templateUrl: './post.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [post_service_1.PostService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map