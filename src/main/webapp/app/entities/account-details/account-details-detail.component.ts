import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAccountDetails } from 'app/shared/model/account-details.model';

@Component({
    selector: 'jhi-account-details-detail',
    templateUrl: './account-details-detail.component.html'
})
export class AccountDetailsDetailComponent implements OnInit {
    accountDetails: IAccountDetails;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ accountDetails }) => {
            this.accountDetails = accountDetails;
        });
    }

    previousState() {
        window.history.back();
    }
}
