"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("app/core");
var JhiMainComponent = /** @class */ (function () {
    function JhiMainComponent(jhiLanguageHelper, router) {
        this.jhiLanguageHelper = jhiLanguageHelper;
        this.router = router;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'faeBooApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.jhiLanguageHelper.updateTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
        });
    };
    JhiMainComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-main',
            templateUrl: './main.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.JhiLanguageHelper, router_1.Router])
    ], JhiMainComponent);
    return JhiMainComponent;
}());
exports.JhiMainComponent = JhiMainComponent;
//# sourceMappingURL=main.component.js.map