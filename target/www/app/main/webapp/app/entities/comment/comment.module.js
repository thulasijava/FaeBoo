"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var admin_module_1 = require("app/admin/admin.module");
var _1 = require("./");
var ENTITY_STATES = _1.commentRoute.concat(_1.commentPopupRoute);
var FaeBooCommentModule = /** @class */ (function () {
    function FaeBooCommentModule() {
    }
    FaeBooCommentModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.FaeBooSharedModule, admin_module_1.FaeBooAdminModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [
                _1.CommentComponent,
                _1.CommentDetailComponent,
                _1.CommentUpdateComponent,
                _1.CommentDeleteDialogComponent,
                _1.CommentDeletePopupComponent
            ],
            entryComponents: [_1.CommentComponent, _1.CommentUpdateComponent, _1.CommentDeleteDialogComponent, _1.CommentDeletePopupComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooCommentModule);
    return FaeBooCommentModule;
}());
exports.FaeBooCommentModule = FaeBooCommentModule;
//# sourceMappingURL=comment.module.js.map