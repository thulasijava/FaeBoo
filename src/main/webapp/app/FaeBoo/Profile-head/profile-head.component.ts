import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/entities/post';
import { IPost } from 'app/shared/model/post.model';
import { IUser, Principal } from 'app/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { JhiAlertService } from 'ng-jhipster';

@Component({
    selector: 'jhi-profile-head',
    templateUrl: './profile-head.component.html',
    styleUrls: ['profile-head.css']
})
export class ProfileHeadComponent implements OnInit {
    str: string;
    post: IPost;
    user: IUser;
    isSaving: boolean;
    testPost: IPost;
    posts: IPost[];
    bioChange: boolean;
    bio: string;

    constructor(private postService: PostService, private jhiAlertService: JhiAlertService) {}

    ngOnInit() {
        this.loadAll();
        this.bioChange = false;
        this.bio = '';
    }

    toggle() {
        console.log(this.bioChange);

        if (this.bioChange === false) {
            this.bioChange = true;
            return;
        }

        if (this.bioChange === true) {
            this.bioChange = false;
            return;
        }
    }

    trackId(index: number, item: IPost) {
        return item.id;
    }

    loadAll() {
        this.postService.query().subscribe(
            (res: HttpResponse<IPost[]>) => {
                this.posts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    getPost(): void {
        console.log('2');
        this.testPost = new class implements IPost {
            content: string;
            dislikes: number;
            id: number;
            likes: number;
            numberOfComments: number;
            owner: IUser;
        }();
        this.testPost.content = 'This is a test';
        this.testPost.numberOfComments = 0;
        this.testPost.likes = 0;
        this.testPost.dislikes = 0;
        this.testPost.id = 0;
        // this.testPosts.push(this.testPost);
    }

    submitPost(): void {
        this.post = new class implements IPost {
            content: string;
            dislikes: number;
            id: number;
            likes: number;
            numberOfComments: number;
            owner: IUser;
        }();
        this.post.content = this.str;
        this.post.dislikes = 0;
        this.post.likes = 0;
        this.post.numberOfComments = 0;
        this.save(this.post);
        this.str = '';
    }

    save(post: IPost) {
        this.isSaving = true;
        const self = this;
        this.postService
            .create(post)
            .toPromise()
            .then(function(response) {
                self.loadAll();
            });
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IPost>>) {
        result.subscribe((res: HttpResponse<IPost>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
