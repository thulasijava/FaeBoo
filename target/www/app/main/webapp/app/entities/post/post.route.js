"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var post_model_1 = require("app/shared/model/post.model");
var post_service_1 = require("./post.service");
var post_component_1 = require("./post.component");
var post_detail_component_1 = require("./post-detail.component");
var post_update_component_1 = require("./post-update.component");
var post_delete_dialog_component_1 = require("./post-delete-dialog.component");
var PostResolve = /** @class */ (function () {
    function PostResolve(service) {
        this.service = service;
    }
    PostResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (post) { return post.body; }));
        }
        return rxjs_1.of(new post_model_1.Post());
    };
    PostResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [post_service_1.PostService])
    ], PostResolve);
    return PostResolve;
}());
exports.PostResolve = PostResolve;
exports.postRoute = [
    {
        path: 'post',
        component: post_component_1.PostComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.post.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'post/:id/view',
        component: post_detail_component_1.PostDetailComponent,
        resolve: {
            post: PostResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.post.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'post/new',
        component: post_update_component_1.PostUpdateComponent,
        resolve: {
            post: PostResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.post.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'post/:id/edit',
        component: post_update_component_1.PostUpdateComponent,
        resolve: {
            post: PostResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.post.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.postPopupRoute = [
    {
        path: 'post/:id/delete',
        component: post_delete_dialog_component_1.PostDeletePopupComponent,
        resolve: {
            post: PostResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.post.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=post.route.js.map