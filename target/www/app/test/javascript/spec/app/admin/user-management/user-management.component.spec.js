"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var user_management_component_1 = require("app/admin/user-management/user-management.component");
var core_1 = require("app/core");
describe('Component Tests', function () {
    describe('User Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [user_management_component_1.UserMgmtComponent]
            })
                .overrideTemplate(user_management_component_1.UserMgmtComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_component_1.UserMgmtComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(core_1.UserService);
        });
        describe('OnInit', function () {
            it('Should call load all on init', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var headers = new http_1.HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                    body: [new core_1.User(123)],
                    headers: headers
                })));
                // WHEN
                comp.ngOnInit();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.users[0]).toEqual(jasmine.objectContaining({ id: 123 }));
            })));
        });
        describe('setActive', function () {
            it('Should update user and call load all', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var headers = new http_1.HttpHeaders().append('link', 'link;link');
                var user = new core_1.User(123);
                spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                    body: [user],
                    headers: headers
                })));
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ status: 200 })));
                // WHEN
                comp.setActive(user, true);
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(user);
                expect(service.query).toHaveBeenCalled();
                expect(comp.users[0]).toEqual(jasmine.objectContaining({ id: 123 }));
            })));
        });
    });
});
//# sourceMappingURL=user-management.component.spec.js.map