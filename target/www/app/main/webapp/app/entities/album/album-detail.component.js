"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AlbumDetailComponent = /** @class */ (function () {
    function AlbumDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    AlbumDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var album = _a.album;
            _this.album = album;
        });
    };
    AlbumDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    AlbumDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-album-detail',
            templateUrl: './album-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
}());
exports.AlbumDetailComponent = AlbumDetailComponent;
//# sourceMappingURL=album-detail.component.js.map