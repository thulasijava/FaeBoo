import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FaeBooSharedModule } from 'app/shared';
import { PROFILE_ROUTE } from 'app/FaeBoo/Profile-temp/profile-temp.route';
import { ProfileTempComponent } from 'app/FaeBoo/Profile-temp/profile-temp.component';
import { ProfileHeadComponent } from 'app/FaeBoo/Profile-head/profile-head.component';

@NgModule({
    imports: [FaeBooSharedModule, RouterModule.forChild([PROFILE_ROUTE])],
    declarations: [ProfileTempComponent, ProfileHeadComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileTempModule {}
