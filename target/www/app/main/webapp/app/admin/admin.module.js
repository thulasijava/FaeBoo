"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var shared_1 = require("app/shared");
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
var _1 = require("./");
var FaeBooAdminModule = /** @class */ (function () {
    function FaeBooAdminModule(languageService, languageHelper) {
        var _this = this;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
        this.languageHelper.language.subscribe(function (languageKey) {
            if (languageKey !== undefined) {
                _this.languageService.changeLanguage(languageKey);
            }
        });
    }
    FaeBooAdminModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                shared_1.FaeBooSharedModule,
                router_1.RouterModule.forChild(_1.adminState)
                /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
            ],
            declarations: [
                _1.AuditsComponent,
                _1.UserMgmtComponent,
                _1.UserMgmtDetailComponent,
                _1.UserMgmtUpdateComponent,
                _1.UserMgmtDeleteDialogComponent,
                _1.LogsComponent,
                _1.JhiConfigurationComponent,
                _1.JhiHealthCheckComponent,
                _1.JhiHealthModalComponent,
                _1.JhiDocsComponent,
                _1.JhiMetricsMonitoringComponent,
                _1.JhiMetricsMonitoringModalComponent
            ],
            providers: [{ provide: ng_jhipster_1.JhiLanguageService, useClass: ng_jhipster_1.JhiLanguageService }],
            entryComponents: [_1.UserMgmtDeleteDialogComponent, _1.JhiHealthModalComponent, _1.JhiMetricsMonitoringModalComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService, core_2.JhiLanguageHelper])
    ], FaeBooAdminModule);
    return FaeBooAdminModule;
}());
exports.FaeBooAdminModule = FaeBooAdminModule;
//# sourceMappingURL=admin.module.js.map