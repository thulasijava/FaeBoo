import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IAccountDetails } from 'app/shared/model/account-details.model';
import { Principal } from 'app/core';
import { AccountDetailsService } from './account-details.service';

@Component({
    selector: 'jhi-account-details',
    templateUrl: './account-details.component.html'
})
export class AccountDetailsComponent implements OnInit, OnDestroy {
    accountDetails: IAccountDetails[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private accountDetailsService: AccountDetailsService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.accountDetailsService.query().subscribe(
            (res: HttpResponse<IAccountDetails[]>) => {
                this.accountDetails = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInAccountDetails();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IAccountDetails) {
        return item.id;
    }

    registerChangeInAccountDetails() {
        this.eventSubscriber = this.eventManager.subscribe('accountDetailsListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
