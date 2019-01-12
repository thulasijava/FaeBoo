/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { FaeBooTestModule } from '../../../test.module';
import { AccountDetailsDeleteDialogComponent } from 'app/entities/account-details/account-details-delete-dialog.component';
import { AccountDetailsService } from 'app/entities/account-details/account-details.service';

describe('Component Tests', () => {
    describe('AccountDetails Management Delete Component', () => {
        let comp: AccountDetailsDeleteDialogComponent;
        let fixture: ComponentFixture<AccountDetailsDeleteDialogComponent>;
        let service: AccountDetailsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FaeBooTestModule],
                declarations: [AccountDetailsDeleteDialogComponent]
            })
                .overrideTemplate(AccountDetailsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AccountDetailsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AccountDetailsService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
