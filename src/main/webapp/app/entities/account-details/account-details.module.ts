import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FaeBooSharedModule } from 'app/shared';
import { FaeBooAdminModule } from 'app/admin/admin.module';
import {
    AccountDetailsComponent,
    AccountDetailsDetailComponent,
    AccountDetailsUpdateComponent,
    AccountDetailsDeletePopupComponent,
    AccountDetailsDeleteDialogComponent,
    accountDetailsRoute,
    accountDetailsPopupRoute
} from './';

const ENTITY_STATES = [...accountDetailsRoute, ...accountDetailsPopupRoute];

@NgModule({
    imports: [FaeBooSharedModule, FaeBooAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AccountDetailsComponent,
        AccountDetailsDetailComponent,
        AccountDetailsUpdateComponent,
        AccountDetailsDeleteDialogComponent,
        AccountDetailsDeletePopupComponent
    ],
    entryComponents: [
        AccountDetailsComponent,
        AccountDetailsUpdateComponent,
        AccountDetailsDeleteDialogComponent,
        AccountDetailsDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FaeBooAccountDetailsModule {}
