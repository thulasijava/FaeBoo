"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("./vendor.ts");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_webstorage_1 = require("ngx-webstorage");
var ng_jhipster_1 = require("ng-jhipster");
var profile_temp_module_1 = require("app/FaeBoo/Profile-temp/profile-temp.module");
var auth_interceptor_1 = require("./blocks/interceptor/auth.interceptor");
var auth_expired_interceptor_1 = require("./blocks/interceptor/auth-expired.interceptor");
var errorhandler_interceptor_1 = require("./blocks/interceptor/errorhandler.interceptor");
var notification_interceptor_1 = require("./blocks/interceptor/notification.interceptor");
var shared_1 = require("app/shared");
var core_2 = require("app/core");
var app_routing_module_1 = require("./app-routing.module");
var home_module_1 = require("./home/home.module");
var account_module_1 = require("./account/account.module");
var entity_module_1 = require("./entities/entity.module");
var moment = require("moment");
// jhipster-needle-angular-add-module-import JHipster will add new module here
var layouts_1 = require("./layouts");
var FaeBooAppModule = /** @class */ (function () {
    function FaeBooAppModule(dpConfig) {
        this.dpConfig = dpConfig;
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
    FaeBooAppModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.FaeBooAppRoutingModule,
                ngx_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
                ng_jhipster_1.NgJhipsterModule.forRoot({
                    // set below to true to make alerts look like toast
                    alertAsToast: false,
                    alertTimeout: 5000,
                    i18nEnabled: true,
                    defaultI18nLang: 'en'
                }),
                shared_1.FaeBooSharedModule.forRoot(),
                core_2.FaeBooCoreModule,
                home_module_1.FaeBooHomeModule,
                profile_temp_module_1.ProfileTempModule,
                account_module_1.FaeBooAccountModule,
                // jhipster-needle-angular-add-module JHipster will add new module here
                entity_module_1.FaeBooEntityModule
            ],
            declarations: [
                layouts_1.JhiMainComponent,
                layouts_1.NavbarComponent,
                layouts_1.ErrorComponent,
                layouts_1.PageRibbonComponent,
                layouts_1.ActiveMenuDirective,
                layouts_1.FooterComponent
                // ProfileHeadComponent,
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_expired_interceptor_1.AuthExpiredInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: errorhandler_interceptor_1.ErrorHandlerInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: notification_interceptor_1.NotificationInterceptor,
                    multi: true
                }
            ],
            bootstrap: [layouts_1.JhiMainComponent]
        }),
        tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbDatepickerConfig])
    ], FaeBooAppModule);
    return FaeBooAppModule;
}());
exports.FaeBooAppModule = FaeBooAppModule;
//# sourceMappingURL=app.module.js.map