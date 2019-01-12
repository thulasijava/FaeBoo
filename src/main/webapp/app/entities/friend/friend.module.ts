import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FaeBooSharedModule } from 'app/shared';
import { FaeBooAdminModule } from 'app/admin/admin.module';
import {
    FriendComponent,
    FriendDetailComponent,
    FriendUpdateComponent,
    FriendDeletePopupComponent,
    FriendDeleteDialogComponent,
    friendRoute,
    friendPopupRoute
} from './';

const ENTITY_STATES = [...friendRoute, ...friendPopupRoute];

@NgModule({
    imports: [FaeBooSharedModule, FaeBooAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [FriendComponent, FriendDetailComponent, FriendUpdateComponent, FriendDeleteDialogComponent, FriendDeletePopupComponent],
    entryComponents: [FriendComponent, FriendUpdateComponent, FriendDeleteDialogComponent, FriendDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FaeBooFriendModule {}
