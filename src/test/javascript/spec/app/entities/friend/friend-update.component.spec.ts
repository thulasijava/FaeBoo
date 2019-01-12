/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { FaeBooTestModule } from '../../../test.module';
import { FriendUpdateComponent } from 'app/entities/friend/friend-update.component';
import { FriendService } from 'app/entities/friend/friend.service';
import { Friend } from 'app/shared/model/friend.model';

describe('Component Tests', () => {
    describe('Friend Management Update Component', () => {
        let comp: FriendUpdateComponent;
        let fixture: ComponentFixture<FriendUpdateComponent>;
        let service: FriendService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FaeBooTestModule],
                declarations: [FriendUpdateComponent]
            })
                .overrideTemplate(FriendUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FriendUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FriendService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Friend(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.friend = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Friend();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.friend = entity;
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
