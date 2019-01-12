import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AccountDetails } from 'app/shared/model/account-details.model';
import { AccountDetailsService } from './account-details.service';
import { AccountDetailsComponent } from './account-details.component';
import { AccountDetailsDetailComponent } from './account-details-detail.component';
import { AccountDetailsUpdateComponent } from './account-details-update.component';
import { AccountDetailsDeletePopupComponent } from './account-details-delete-dialog.component';
import { IAccountDetails } from 'app/shared/model/account-details.model';

@Injectable({ providedIn: 'root' })
export class AccountDetailsResolve implements Resolve<IAccountDetails> {
    constructor(private service: AccountDetailsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AccountDetails> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<AccountDetails>) => response.ok),
                map((accountDetails: HttpResponse<AccountDetails>) => accountDetails.body)
            );
        }
        return of(new AccountDetails());
    }
}

export const accountDetailsRoute: Routes = [
    {
        path: 'account-details',
        component: AccountDetailsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'account-details/:id/view',
        component: AccountDetailsDetailComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'account-details/new',
        component: AccountDetailsUpdateComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'account-details/:id/edit',
        component: AccountDetailsUpdateComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const accountDetailsPopupRoute: Routes = [
    {
        path: 'account-details/:id/delete',
        component: AccountDetailsDeletePopupComponent,
        resolve: {
            accountDetails: AccountDetailsResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.accountDetails.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
