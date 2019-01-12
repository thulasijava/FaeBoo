"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var VideoDetailComponent = /** @class */ (function () {
    function VideoDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var video = _a.video;
            _this.video = video;
        });
    };
    VideoDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    VideoDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-video-detail',
            templateUrl: './video-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
exports.VideoDetailComponent = VideoDetailComponent;
//# sourceMappingURL=video-detail.component.js.map