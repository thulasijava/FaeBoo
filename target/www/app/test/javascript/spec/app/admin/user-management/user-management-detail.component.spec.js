"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var user_management_detail_component_1 = require("app/admin/user-management/user-management-detail.component");
var core_1 = require("app/core");
describe('Component Tests', function () {
    describe('User Management Detail Component', function () {
        var comp;
        var fixture;
        var route = {
            data: rxjs_1.of({ user: new core_1.User(1, 'user', 'first', 'last', 'first@last.com', true, 'en', ['ROLE_USER'], 'admin', null, null, null) })
        };
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [user_management_detail_component_1.UserMgmtDetailComponent],
                providers: [
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: route
                    }
                ]
            })
                .overrideTemplate(user_management_detail_component_1.UserMgmtDetailComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_detail_component_1.UserMgmtDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.user).toEqual(jasmine.objectContaining({
                    id: 1,
                    login: 'user',
                    firstName: 'first',
                    lastName: 'last',
                    email: 'first@last.com',
                    activated: true,
                    langKey: 'en',
                    authorities: ['ROLE_USER'],
                    createdBy: 'admin',
                    createdDate: null,
                    lastModifiedBy: null,
                    lastModifiedDate: null,
                    password: null
                }));
            });
        });
    });
});
//# sourceMappingURL=user-management-detail.component.spec.js.map