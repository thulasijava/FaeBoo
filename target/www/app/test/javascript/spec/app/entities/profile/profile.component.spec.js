"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var profile_component_1 = require("app/entities/profile/profile.component");
var profile_service_1 = require("app/entities/profile/profile.service");
var profile_model_1 = require("app/shared/model/profile.model");
describe('Component Tests', function () {
    describe('Profile Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [profile_component_1.ProfileComponent],
                providers: []
            })
                .overrideTemplate(profile_component_1.ProfileComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(profile_component_1.ProfileComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(profile_service_1.ProfileService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new profile_model_1.Profile(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.profiles[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=profile.component.spec.js.map