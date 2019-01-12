"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var post = _a.post;
            _this.post = post;
        });
    };
    PostDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    PostDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-post-detail',
            templateUrl: './post-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=post-detail.component.js.map