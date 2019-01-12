"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var photo_update_component_1 = require("app/entities/photo/photo-update.component");
var photo_service_1 = require("app/entities/photo/photo.service");
var photo_model_1 = require("app/shared/model/photo.model");
describe('Component Tests', function () {
    describe('Photo Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [photo_update_component_1.PhotoUpdateComponent]
            })
                .overrideTemplate(photo_update_component_1.PhotoUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(photo_update_component_1.PhotoUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(photo_service_1.PhotoService);
        });
        describe('save', function () {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new photo_model_1.Photo(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.photo = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new photo_model_1.Photo();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.photo = entity;
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
//# sourceMappingURL=photo-update.component.spec.js.map