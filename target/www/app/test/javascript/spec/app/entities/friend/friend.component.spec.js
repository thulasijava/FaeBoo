"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var friend_component_1 = require("app/entities/friend/friend.component");
var friend_service_1 = require("app/entities/friend/friend.service");
var friend_model_1 = require("app/shared/model/friend.model");
describe('Component Tests', function () {
    describe('Friend Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [friend_component_1.FriendComponent],
                providers: []
            })
                .overrideTemplate(friend_component_1.FriendComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(friend_component_1.FriendComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(friend_service_1.FriendService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new friend_model_1.Friend(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.friends[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=friend.component.spec.js.map