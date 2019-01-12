/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { FaeBooTestModule } from '../../../test.module';
import { FriendDetailComponent } from 'app/entities/friend/friend-detail.component';
import { Friend } from 'app/shared/model/friend.model';

describe('Component Tests', () => {
    describe('Friend Management Detail Component', () => {
        let comp: FriendDetailComponent;
        let fixture: ComponentFixture<FriendDetailComponent>;
        const route = ({ data: of({ friend: new Friend(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FaeBooTestModule],
                declarations: [FriendDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(FriendDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FriendDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.friend).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
