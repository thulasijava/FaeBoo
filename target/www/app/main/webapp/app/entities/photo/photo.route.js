"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var photo_model_1 = require("app/shared/model/photo.model");
var photo_service_1 = require("./photo.service");
var photo_component_1 = require("./photo.component");
var photo_detail_component_1 = require("./photo-detail.component");
var photo_update_component_1 = require("./photo-update.component");
var photo_delete_dialog_component_1 = require("./photo-delete-dialog.component");
var PhotoResolve = /** @class */ (function () {
    function PhotoResolve(service) {
        this.service = service;
    }
    PhotoResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (photo) { return photo.body; }));
        }
        return rxjs_1.of(new photo_model_1.Photo());
    };
    PhotoResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [photo_service_1.PhotoService])
    ], PhotoResolve);
    return PhotoResolve;
}());
exports.PhotoResolve = PhotoResolve;
exports.photoRoute = [
    {
        path: 'photo',
        component: photo_component_1.PhotoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.photo.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'photo/:id/view',
        component: photo_detail_component_1.PhotoDetailComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.photo.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'photo/new',
        component: photo_update_component_1.PhotoUpdateComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.photo.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'photo/:id/edit',
        component: photo_update_component_1.PhotoUpdateComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.photo.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.photoPopupRoute = [
    {
        path: 'photo/:id/delete',
        component: photo_delete_dialog_component_1.PhotoDeletePopupComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.photo.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=photo.route.js.map