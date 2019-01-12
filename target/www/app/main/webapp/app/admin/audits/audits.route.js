"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = require("ng-jhipster");
var audits_component_1 = require("./audits.component");
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    resolve: {
        pagingParams: ng_jhipster_1.JhiResolvePagingParams
    },
    data: {
        pageTitle: 'audits.title',
        defaultSort: 'auditEventDate,desc'
    }
};
//# sourceMappingURL=audits.route.js.map