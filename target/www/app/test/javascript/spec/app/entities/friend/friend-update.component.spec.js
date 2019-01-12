"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var friend_update_component_1 = require("app/entities/friend/friend-update.component");
var friend_service_1 = require("app/entities/friend/friend.service");
var friend_model_1 = require("app/shared/model/friend.model");
describe('Component Tests', function () {
    describe('Friend Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [friend_update_component_1.FriendUpdateComponent]
            })
                .overrideTemplate(friend_update_component_1.FriendUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(friend_update_component_1.FriendUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(friend_service_1.FriendService);
        });
        describe('save', function () {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new friend_model_1.Friend(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.friend = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new friend_model_1.Friend();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.friend = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
//# sourceMappingURL=friend-update.component.spec.js.map