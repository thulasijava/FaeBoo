"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var rxjs_1 = require("rxjs");
var ng_jhipster_1 = require("ng-jhipster");
var test_module_1 = require("../../../test.module");
var user_management_delete_dialog_component_1 = require("app/admin/user-management/user-management-delete-dialog.component");
var core_1 = require("app/core");
describe('Component Tests', function () {
    describe('User Management Delete Component', function () {
        var comp;
        var fixture;
        var service;
        var mockEventManager;
        var mockActiveModal;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [user_management_delete_dialog_component_1.UserMgmtDeleteDialogComponent]
            })
                .overrideTemplate(user_management_delete_dialog_component_1.UserMgmtDeleteDialogComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_delete_dialog_component_1.UserMgmtDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(core_1.UserService);
            mockEventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(ng_bootstrap_1.NgbActiveModal);
        });
        describe('confirmDelete', function () {
            it('Should call delete service on confirmDelete', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                spyOn(service, 'delete').and.returnValue(rxjs_1.of({}));
                // WHEN
                comp.confirmDelete('user');
                testing_1.tick();
                // THEN
                expect(service.delete).toHaveBeenCalledWith('user');
                expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
            })));
        });
    });
});
//# sourceMappingURL=user-management-delete-dialog.component.spec.js.map