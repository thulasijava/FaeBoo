"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var comment_model_1 = require("app/shared/model/comment.model");
var comment_service_1 = require("./comment.service");
var comment_component_1 = require("./comment.component");
var comment_detail_component_1 = require("./comment-detail.component");
var comment_update_component_1 = require("./comment-update.component");
var comment_delete_dialog_component_1 = require("./comment-delete-dialog.component");
var CommentResolve = /** @class */ (function () {
    function CommentResolve(service) {
        this.service = service;
    }
    CommentResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (comment) { return comment.body; }));
        }
        return rxjs_1.of(new comment_model_1.Comment());
    };
    CommentResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [comment_service_1.CommentService])
    ], CommentResolve);
    return CommentResolve;
}());
exports.CommentResolve = CommentResolve;
exports.commentRoute = [
    {
        path: 'comment',
        component: comment_component_1.CommentComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.comment.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'comment/:id/view',
        component: comment_detail_component_1.CommentDetailComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.comment.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'comment/new',
        component: comment_update_component_1.CommentUpdateComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.comment.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'comment/:id/edit',
        component: comment_update_component_1.CommentUpdateComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.comment.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.commentPopupRoute = [
    {
        path: 'comment/:id/delete',
        component: comment_delete_dialog_component_1.CommentDeletePopupComponent,
        resolve: {
            comment: CommentResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.comment.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=comment.route.js.map