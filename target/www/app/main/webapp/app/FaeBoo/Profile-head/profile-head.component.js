"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var post_1 = require("app/entities/post");
var ng_jhipster_1 = require("ng-jhipster");
var ProfileHeadComponent = /** @class */ (function () {
    function ProfileHeadComponent(postService, jhiAlertService) {
        this.postService = postService;
        this.jhiAlertService = jhiAlertService;
    }
    ProfileHeadComponent.prototype.ngOnInit = function () {
        this.loadAll();
        this.bioChange = false;
        this.bio = '';
    };
    ProfileHeadComponent.prototype.toggle = function () {
        console.log(this.bioChange);
        if (this.bioChange === false) {
            this.bioChange = true;
            return;
        }
        if (this.bioChange === true) {
            this.bioChange = false;
            return;
        }
    };
    ProfileHeadComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    ProfileHeadComponent.prototype.loadAll = function () {
        var _this = this;
        this.postService.query().subscribe(function (res) {
            _this.posts = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    ProfileHeadComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    ProfileHeadComponent.prototype.getPost = function () {
        console.log('2');
        this.testPost = new /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }())();
        this.testPost.content = 'This is a test';
        this.testPost.numberOfComments = 0;
        this.testPost.likes = 0;
        this.testPost.dislikes = 0;
        this.testPost.id = 0;
        // this.testPosts.push(this.testPost);
    };
    ProfileHeadComponent.prototype.submitPost = function () {
        this.post = new /** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }())();
        this.post.content = this.str;
        this.post.dislikes = 0;
        this.post.likes = 0;
        this.post.numberOfComments = 0;
        this.save(this.post);
        this.str = '';
    };
    ProfileHeadComponent.prototype.save = function (post) {
        this.isSaving = true;
        var self = this;
        this.postService
            .create(post)
            .toPromise()
            .then(function (response) {
            self.loadAll();
        });
    };
    ProfileHeadComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    ProfileHeadComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
    };
    ProfileHeadComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    ProfileHeadComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-profile-head',
            templateUrl: './profile-head.component.html',
            styleUrls: ['profile-head.css']
        }),
        tslib_1.__metadata("design:paramtypes", [post_1.PostService, ng_jhipster_1.JhiAlertService])
    ], ProfileHeadComponent);
    return ProfileHeadComponent;
}());
exports.ProfileHeadComponent = ProfileHeadComponent;
//# sourceMappingURL=profile-head.component.js.map