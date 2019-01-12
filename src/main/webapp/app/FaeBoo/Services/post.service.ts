import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPost } from 'app/shared/model/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
    public resourceUrl = SERVER_API_URL + 'api/users';

    constructor(private http: HttpClient) {}

    create(post: IPost): Observable<HttpResponse<IPost>> {
        return this.http.post<IPost>(this.resourceUrl, post, { observe: 'response' });
    }

    update(post: IPost): Observable<HttpResponse<IPost>> {
        return this.http.put<IPost>(this.resourceUrl, post, { observe: 'response' });
    }

    find(login: string): Observable<HttpResponse<IPost>> {
        return this.http.get<IPost>(`${this.resourceUrl}/${login}`, { observe: 'response' });
    }

    query(req?: any): Observable<HttpResponse<IPost[]>> {
        const options = createRequestOption(req);
        return this.http.get<IPost[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(login: string): Observable<HttpResponse<any>> {
        return this.http.delete(`${this.resourceUrl}/${login}`, { observe: 'response' });
    }

    authorities(): Observable<string[]> {
        return this.http.get<string[]>(SERVER_API_URL + 'api/users/authorities');
    }
}
