"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var user_management_update_component_1 = require("app/admin/user-management/user-management-update.component");
var core_1 = require("app/core");
describe('Component Tests', function () {
    describe('User Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        var mockLanguageHelper;
        var route = {
            data: rxjs_1.of({ user: new core_1.User(1, 'user', 'first', 'last', 'first@last.com', true, 'en', ['ROLE_USER'], 'admin', null, null, null) })
        };
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [user_management_update_component_1.UserMgmtUpdateComponent],
                providers: [
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: route
                    }
                ]
            })
                .overrideTemplate(user_management_update_component_1.UserMgmtUpdateComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_update_component_1.UserMgmtUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(core_1.UserService);
            mockLanguageHelper = fixture.debugElement.injector.get(core_1.JhiLanguageHelper);
        });
        describe('OnInit', function () {
            it('Should load authorities and language on init', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                spyOn(service, 'authorities').and.returnValue(rxjs_1.of(['USER']));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.authorities).toHaveBeenCalled();
                expect(comp.authorities).toEqual(['USER']);
                expect(mockLanguageHelper.getAllSpy).toHaveBeenCalled();
            })));
        });
        describe('save', function () {
            it('Should call update service on save for existing user', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new core_1.User(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                    body: entity
                })));
                comp.user = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            })));
            it('Should call create service on save for new user', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new core_1.User();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.user = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            })));
        });
    });
});
//# sourceMappingURL=user-management-update.component.spec.js.map