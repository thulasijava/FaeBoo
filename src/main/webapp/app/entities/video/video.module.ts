import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FaeBooSharedModule } from 'app/shared';
import {
    VideoComponent,
    VideoDetailComponent,
    VideoUpdateComponent,
    VideoDeletePopupComponent,
    VideoDeleteDialogComponent,
    videoRoute,
    videoPopupRoute
} from './';

const ENTITY_STATES = [...videoRoute, ...videoPopupRoute];

@NgModule({
    imports: [FaeBooSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [VideoComponent, VideoDetailComponent, VideoUpdateComponent, VideoDeleteDialogComponent, VideoDeletePopupComponent],
    entryComponents: [VideoComponent, VideoUpdateComponent, VideoDeleteDialogComponent, VideoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FaeBooVideoModule {}
