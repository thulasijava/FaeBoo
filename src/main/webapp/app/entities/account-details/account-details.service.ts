import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAccountDetails } from 'app/shared/model/account-details.model';

type EntityResponseType = HttpResponse<IAccountDetails>;
type EntityArrayResponseType = HttpResponse<IAccountDetails[]>;

@Injectable({ providedIn: 'root' })
export class AccountDetailsService {
    public resourceUrl = SERVER_API_URL + 'api/account-details';

    constructor(private http: HttpClient) {}

    create(accountDetails: IAccountDetails): Observable<EntityResponseType> {
        return this.http.post<IAccountDetails>(this.resourceUrl, accountDetails, { observe: 'response' });
    }

    update(accountDetails: IAccountDetails): Observable<EntityResponseType> {
        return this.http.put<IAccountDetails>(this.resourceUrl, accountDetails, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IAccountDetails>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IAccountDetails[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
