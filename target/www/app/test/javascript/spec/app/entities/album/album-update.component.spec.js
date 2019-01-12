"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var album_update_component_1 = require("app/entities/album/album-update.component");
var album_service_1 = require("app/entities/album/album.service");
var album_model_1 = require("app/shared/model/album.model");
describe('Component Tests', function () {
    describe('Album Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [album_update_component_1.AlbumUpdateComponent]
            })
                .overrideTemplate(album_update_component_1.AlbumUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(album_update_component_1.AlbumUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(album_service_1.AlbumService);
        });
        describe('save', function () {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new album_model_1.Album(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.album = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new album_model_1.Album();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.album = entity;
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
//# sourceMappingURL=album-update.component.spec.js.map