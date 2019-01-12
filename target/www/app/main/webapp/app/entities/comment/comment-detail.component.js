"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CommentDetailComponent = /** @class */ (function () {
    function CommentDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    CommentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var comment = _a.comment;
            _this.comment = comment;
        });
    };
    CommentDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    CommentDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-comment-detail',
            templateUrl: './comment-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], CommentDetailComponent);
    return CommentDetailComponent;
}());
exports.CommentDetailComponent = CommentDetailComponent;
//# sourceMappingURL=comment-detail.component.js.map