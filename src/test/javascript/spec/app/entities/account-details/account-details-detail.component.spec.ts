/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FaeBooTestModule } from '../../../test.module';
import { AccountDetailsDetailComponent } from 'app/entities/account-details/account-details-detail.component';
import { AccountDetails } from 'app/shared/model/account-details.model';

describe('Component Tests', () => {
    describe('AccountDetails Management Detail Component', () => {
        let comp: AccountDetailsDetailComponent;
        let fixture: ComponentFixture<AccountDetailsDetailComponent>;
        const route = ({ data: of({ accountDetails: new AccountDetails(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FaeBooTestModule],
                declarations: [AccountDetailsDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AccountDetailsDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AccountDetailsDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.accountDetails).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
