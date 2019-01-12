import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Friend } from 'app/shared/model/friend.model';
import { FriendService } from './friend.service';
import { FriendComponent } from './friend.component';
import { FriendDetailComponent } from './friend-detail.component';
import { FriendUpdateComponent } from './friend-update.component';
import { FriendDeletePopupComponent } from './friend-delete-dialog.component';
import { IFriend } from 'app/shared/model/friend.model';

@Injectable({ providedIn: 'root' })
export class FriendResolve implements Resolve<IFriend> {
    constructor(private service: FriendService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Friend> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Friend>) => response.ok),
                map((friend: HttpResponse<Friend>) => friend.body)
            );
        }
        return of(new Friend());
    }
}

export const friendRoute: Routes = [
    {
        path: 'friend',
        component: FriendComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'friend/:id/view',
        component: FriendDetailComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'friend/new',
        component: FriendUpdateComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'friend/:id/edit',
        component: FriendUpdateComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const friendPopupRoute: Routes = [
    {
        path: 'friend/:id/delete',
        component: FriendDeletePopupComponent,
        resolve: {
            friend: FriendResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'faeBooApp.friend.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
