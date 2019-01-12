"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var account_details_model_1 = require("app/shared/model/account-details.model");
var account_details_service_1 = require("./account-details.service");
var account_details_component_1 = require("./account-details.component");
var account_details_detail_component_1 = require("./account-details-detail.component");
var account_details_update_component_1 = require("./account-details-update.component");
var account_details_delete_dialog_component_1 = require("./account-details-delete-dialog.component");
var AccountDetailsResolve = /** @class */ (function () {
    function AccountDetailsResolve(service) {
        this.service = service;
    }
    AccountDetailsResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(operators_1.filter(function (response) { return response.ok; }), operators_1.map(function (accountDetails) { return accountDetails.body; }));
        }
        return rxjs_1.of(new account_details_model_1.AccountDetails());
    };
    AccountDetailsResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [account_details_service_1.AccountDetailsService])
    ], AccountDetailsResolve);
    return AccountDetailsResolve;
}());
exports.AccountDetailsResolve = AccountDetailsResolve;
exports.accountDetailsRoute = [
    {
        path: 'account-details',
        component: account_details_component_1.AccountDetailsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'account-details/:id/view',
        component: account_details_detail_component_1.AccountDetailsDetailComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'account-details/new',
        component: account_details_update_component_1.AccountDetailsUpdateComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'account-details/:id/edit',
        component: account_details_update_component_1.AccountDetailsUpdateComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.accountDetailsPopupRoute = [
    {
        path: 'account-details/:id/delete',
        component: account_details_delete_dialog_component_1.AccountDetailsDeletePopupComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=account-details.route.js.map