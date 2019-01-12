"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var ActiveMenuDirective = /** @class */ (function () {
    function ActiveMenuDirective(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ActiveMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    };
    ActiveMenuDirective.prototype.updateActiveFlag = function (selectedLanguage) {
        if (this.jhiActiveMenu === selectedLanguage) {
            this.renderer.setElementClass(this.el.nativeElement, 'active', true);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, 'active', false);
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ActiveMenuDirective.prototype, "jhiActiveMenu", void 0);
    ActiveMenuDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[jhiActiveMenu]'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_2.TranslateService])
    ], ActiveMenuDirective);
    return ActiveMenuDirective;
}());
exports.ActiveMenuDirective = ActiveMenuDirective;
//# sourceMappingURL=active-menu.directive.js.map