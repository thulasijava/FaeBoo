import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IFriend } from 'app/shared/model/friend.model';
import { FriendService } from './friend.service';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-friend-update',
    templateUrl: './friend-update.component.html'
})
export class FriendUpdateComponent implements OnInit {
    friend: IFriend;
    isSaving: boolean;

    users: IUser[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private friendService: FriendService,
        private userService: UserService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ friend }) => {
            this.friend = friend;
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
        if (this.friend.id !== undefined) {
            this.subscribeToSaveResponse(this.friendService.update(this.friend));
        } else {
            this.subscribeToSaveResponse(this.friendService.create(this.friend));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IFriend>>) {
        result.subscribe((res: HttpResponse<IFriend>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
