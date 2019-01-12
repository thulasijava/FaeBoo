/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { FaeBooTestModule } from '../../../test.module';
import { AccountDetailsUpdateComponent } from 'app/entities/account-details/account-details-update.component';
import { AccountDetailsService } from 'app/entities/account-details/account-details.service';
import { AccountDetails } from 'app/shared/model/account-details.model';

describe('Component Tests', () => {
    describe('AccountDetails Management Update Component', () => {
        let comp: AccountDetailsUpdateComponent;
        let fixture: ComponentFixture<AccountDetailsUpdateComponent>;
        let service: AccountDetailsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FaeBooTestModule],
                declarations: [AccountDetailsUpdateComponent]
            })
                .overrideTemplate(AccountDetailsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AccountDetailsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AccountDetailsService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new AccountDetails(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.accountDetails = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new AccountDetails();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.accountDetails = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
