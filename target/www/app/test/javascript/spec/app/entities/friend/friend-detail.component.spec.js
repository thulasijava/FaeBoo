"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var friend_detail_component_1 = require("app/entities/friend/friend-detail.component");
var friend_model_1 = require("app/shared/model/friend.model");
describe('Component Tests', function () {
    describe('Friend Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ friend: new friend_model_1.Friend(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [friend_detail_component_1.FriendDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(friend_detail_component_1.FriendDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(friend_detail_component_1.FriendDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.friend).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=friend-detail.component.spec.js.map