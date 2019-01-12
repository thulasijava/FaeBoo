"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PhotoDetailComponent = /** @class */ (function () {
    function PhotoDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    PhotoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (_a) {
            var photo = _a.photo;
            _this.photo = photo;
        });
    };
    PhotoDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    PhotoDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-photo-detail',
            templateUrl: './photo-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], PhotoDetailComponent);
    return PhotoDetailComponent;
}());
exports.PhotoDetailComponent = PhotoDetailComponent;
//# sourceMappingURL=photo-detail.component.js.map