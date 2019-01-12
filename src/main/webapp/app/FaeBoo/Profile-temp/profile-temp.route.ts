import { Route } from '@angular/router';

import { ProfileTempComponent } from 'app/FaeBoo/Profile-temp/profile-temp.component';

export const PROFILE_ROUTE: Route = {
    path: 'profile-head',
    component: ProfileTempComponent,
    data: {
        authorities: [],
        pageTitle: 'profile.title'
    }
};
