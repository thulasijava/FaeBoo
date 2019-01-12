"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var album_model_1 = require("app/shared/model/album.model");
var album_service_1 = require("./album.service");
var album_component_1 = require("./album.component");
var album_detail_component_1 = require("./album-detail.component");
var album_update_component_1 = require("./album-update.component");
var album_delete_dialog_component_1 = require("./album-delete-dialog.component");
var AlbumResolve = /** @class */ (function () {
    function AlbumResolve(service) {
        this.service = service;
    }
    AlbumResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (album) { return album.body; }));
        }
        return rxjs_1.of(new album_model_1.Album());
    };
    AlbumResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [album_service_1.AlbumService])
    ], AlbumResolve);
    return AlbumResolve;
}());
exports.AlbumResolve = AlbumResolve;
exports.albumRoute = [
    {
        path: 'album',
        component: album_component_1.AlbumComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.album.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'album/:id/view',
        component: album_detail_component_1.AlbumDetailComponent,
        resolve: {
            album: AlbumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.album.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'album/new',
        component: album_update_component_1.AlbumUpdateComponent,
        resolve: {
            album: AlbumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.album.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'album/:id/edit',
        component: album_update_component_1.AlbumUpdateComponent,
        resolve: {
            album: AlbumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.album.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.albumPopupRoute = [
    {
        path: 'album/:id/delete',
        component: album_delete_dialog_component_1.AlbumDeletePopupComponent,
        resolve: {
            album: AlbumResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.album.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=album.route.js.map