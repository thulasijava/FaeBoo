"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var rxjs_1 = require("rxjs");
var language_constants_1 = require("app/core/language/language.constants");
var JhiLanguageHelper = /** @class */ (function () {
    function JhiLanguageHelper(translateService, 
    // tslint:disable-next-line: no-unused-variable
    rootRenderer, titleService, router) {
        this.translateService = translateService;
        this.rootRenderer = rootRenderer;
        this.titleService = titleService;
        this.router = router;
        this.renderer = null;
        this._language = new rxjs_1.BehaviorSubject(this.translateService.currentLang);
        this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
        this.init();
    }
    JhiLanguageHelper.prototype.getAll = function () {
        return Promise.resolve(language_constants_1.LANGUAGES);
    };
    Object.defineProperty(JhiLanguageHelper.prototype, "language", {
        get: function () {
            return this._language.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update the window title using params in the following
     * order:
     * 1. titleKey parameter
     * 2. $state.$current.data.pageTitle (current state page title)
     * 3. 'global.title'
     */
    JhiLanguageHelper.prototype.updateTitle = function (titleKey) {
        var _this = this;
        if (!titleKey) {
            titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
        }
        this.translateService.get(titleKey).subscribe(function (title) {
            _this.titleService.setTitle(title);
        });
    };
    JhiLanguageHelper.prototype.init = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this._language.next(_this.translateService.currentLang);
            _this.renderer.setAttribute(document.querySelector('html'), 'lang', _this.translateService.currentLang);
            _this.updateTitle();
        });
    };
    JhiLanguageHelper.prototype.getPageTitle = function (routeSnapshot) {
        var title = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'faeBooApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiLanguageHelper = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            core_1.RendererFactory2,
            platform_browser_1.Title,
            router_1.Router])
    ], JhiLanguageHelper);
    return JhiLanguageHelper;
}());
exports.JhiLanguageHelper = JhiLanguageHelper;
//# sourceMappingURL=language.helper.js.map