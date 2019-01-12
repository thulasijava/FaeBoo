"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var profile_update_component_1 = require("app/entities/profile/profile-update.component");
var profile_service_1 = require("app/entities/profile/profile.service");
var profile_model_1 = require("app/shared/model/profile.model");
describe('Component Tests', function () {
    describe('Profile Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [profile_update_component_1.ProfileUpdateComponent]
            })
                .overrideTemplate(profile_update_component_1.ProfileUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(profile_update_component_1.ProfileUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(profile_service_1.ProfileService);
        });
        describe('save', function () {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new profile_model_1.Profile(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.profile = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new profile_model_1.Profile();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.profile = entity;
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
//# sourceMappingURL=profile-update.component.spec.js.map