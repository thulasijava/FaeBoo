"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var profile_model_1 = require("app/shared/model/profile.model");
var profile_service_1 = require("./profile.service");
var profile_component_1 = require("./profile.component");
var profile_detail_component_1 = require("./profile-detail.component");
var profile_update_component_1 = require("./profile-update.component");
var profile_delete_dialog_component_1 = require("./profile-delete-dialog.component");
var ProfileResolve = /** @class */ (function () {
    function ProfileResolve(service) {
        this.service = service;
    }
    ProfileResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (profile) { return profile.body; }));
        }
        return rxjs_1.of(new profile_model_1.Profile());
    };
    ProfileResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], ProfileResolve);
    return ProfileResolve;
}());
exports.ProfileResolve = ProfileResolve;
exports.profileRoute = [
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.profile.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'profile/:id/view',
        component: profile_detail_component_1.ProfileDetailComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.profile.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'profile/new',
        component: profile_update_component_1.ProfileUpdateComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.profile.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'profile/:id/edit',
        component: profile_update_component_1.ProfileUpdateComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.profile.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.profilePopupRoute = [
    {
        path: 'profile/:id/delete',
        component: profile_delete_dialog_component_1.ProfileDeletePopupComponent,
        resolve: {
            profile: ProfileResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.profile.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=profile.route.js.map