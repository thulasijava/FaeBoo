"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var video_model_1 = require("app/shared/model/video.model");
var video_service_1 = require("./video.service");
var video_component_1 = require("./video.component");
var video_detail_component_1 = require("./video-detail.component");
var video_update_component_1 = require("./video-update.component");
var video_delete_dialog_component_1 = require("./video-delete-dialog.component");
var VideoResolve = /** @class */ (function () {
    function VideoResolve(service) {
        this.service = service;
    }
    VideoResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (video) { return video.body; }));
        }
        return rxjs_1.of(new video_model_1.Video());
    };
    VideoResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [video_service_1.VideoService])
    ], VideoResolve);
    return VideoResolve;
}());
exports.VideoResolve = VideoResolve;
exports.videoRoute = [
    {
        path: 'video',
        component: video_component_1.VideoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.video.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'video/:id/view',
        component: video_detail_component_1.VideoDetailComponent,
        resolve: {
            video: VideoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.video.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'video/new',
        component: video_update_component_1.VideoUpdateComponent,
        resolve: {
            video: VideoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.video.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'video/:id/edit',
        component: video_update_component_1.VideoUpdateComponent,
        resolve: {
            video: VideoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.video.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.videoPopupRoute = [
    {
        path: 'video/:id/delete',
        component: video_delete_dialog_component_1.VideoDeletePopupComponent,
        resolve: {
            video: VideoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.video.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=video.route.js.map