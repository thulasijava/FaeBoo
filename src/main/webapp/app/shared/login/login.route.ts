import { Route } from '@angular/router';

import { JhiLoginModalComponent } from 'app/shared';

export const loginRoute: Route = {
    path: 'login',
    component: JhiLoginModalComponent,
    data: {
        authorities: [],
        pageTitle: 'login.title'
    }
};
