"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var rxjs_1 = require("rxjs");
var ng_jhipster_1 = require("ng-jhipster");
var test_module_1 = require("../../../test.module");
var friend_delete_dialog_component_1 = require("app/entities/friend/friend-delete-dialog.component");
var friend_service_1 = require("app/entities/friend/friend.service");
describe('Component Tests', function () {
    describe('Friend Management Delete Component', function () {
        var comp;
        var fixture;
        var service;
        var mockEventManager;
        var mockActiveModal;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [friend_delete_dialog_component_1.FriendDeleteDialogComponent]
            })
                .overrideTemplate(friend_delete_dialog_component_1.FriendDeleteDialogComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(friend_delete_dialog_component_1.FriendDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(friend_service_1.FriendService);
            mockEventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(ng_bootstrap_1.NgbActiveModal);
        });
        describe('confirmDelete', function () {
            it('Should call delete service on confirmDelete', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                spyOn(service, 'delete').and.returnValue(rxjs_1.of({}));
                // WHEN
                comp.confirmDelete(123);
                testing_1.tick();
                // THEN
                expect(service.delete).toHaveBeenCalledWith(123);
                expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
            })));
        });
    });
});
//# sourceMappingURL=friend-delete-dialog.component.spec.js.map