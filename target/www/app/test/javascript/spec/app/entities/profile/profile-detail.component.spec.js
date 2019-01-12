"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var profile_detail_component_1 = require("app/entities/profile/profile-detail.component");
var profile_model_1 = require("app/shared/model/profile.model");
describe('Component Tests', function () {
    describe('Profile Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ profile: new profile_model_1.Profile(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [profile_detail_component_1.ProfileDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(profile_detail_component_1.ProfileDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(profile_detail_component_1.ProfileDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.profile).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=profile-detail.component.spec.js.map