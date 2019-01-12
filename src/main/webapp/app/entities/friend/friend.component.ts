import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IFriend } from 'app/shared/model/friend.model';
import { Principal } from 'app/core';
import { FriendService } from './friend.service';

@Component({
    selector: 'jhi-friend',
    templateUrl: './friend.component.html'
})
export class FriendComponent implements OnInit, OnDestroy {
    friends: IFriend[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private friendService: FriendService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.friendService.query().subscribe(
            (res: HttpResponse<IFriend[]>) => {
                this.friends = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInFriends();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IFriend) {
        return item.id;
    }

    registerChangeInFriends() {
        this.eventSubscriber = this.eventManager.subscribe('friendListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
