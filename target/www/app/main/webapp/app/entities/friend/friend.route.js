"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var friend_model_1 = require("app/shared/model/friend.model");
var friend_service_1 = require("./friend.service");
var friend_component_1 = require("./friend.component");
var friend_detail_component_1 = require("./friend-detail.component");
var friend_update_component_1 = require("./friend-update.component");
var friend_delete_dialog_component_1 = require("./friend-delete-dialog.component");
var FriendResolve = /** @class */ (function () {
    function FriendResolve(service) {
        this.service = service;
    }
    FriendResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (friend) { return friend.body; }));
        }
        return rxjs_1.of(new friend_model_1.Friend());
    };
    FriendResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [friend_service_1.FriendService])
    ], FriendResolve);
    return FriendResolve;
}());
exports.FriendResolve = FriendResolve;
exports.friendRoute = [
    {
        path: 'friend',
        component: friend_component_1.FriendComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'friend/:id/view',
        component: friend_detail_component_1.FriendDetailComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'friend/new',
        component: friend_update_component_1.FriendUpdateComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'friend/:id/edit',
        component: friend_update_component_1.FriendUpdateComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.friendPopupRoute = [
    {
        path: 'friend/:id/delete',
        component: friend_delete_dialog_component_1.FriendDeletePopupComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=friend.route.js.map