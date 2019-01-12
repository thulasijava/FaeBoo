import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IAccountDetails } from 'app/shared/model/account-details.model';
import { AccountDetailsService } from './account-details.service';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-account-details-update',
    templateUrl: './account-details-update.component.html'
})
export class AccountDetailsUpdateComponent implements OnInit {
    accountDetails: IAccountDetails;
    isSaving: boolean;

    users: IUser[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private accountDetailsService: AccountDetailsService,
        private userService: UserService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ accountDetails }) => {
            this.accountDetails = accountDetails;
        });
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.accountDetails.id !== undefined) {
            this.subscribeToSaveResponse(this.accountDetailsService.update(this.accountDetails));
        } else {
            this.subscribeToSaveResponse(this.accountDetailsService.create(this.accountDetails));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IAccountDetails>>) {
        result.subscribe((res: HttpResponse<IAccountDetails>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackUserById(index: number, item: IUser) {
        return item.id;
    }
}
