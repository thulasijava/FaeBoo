"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var album_component_1 = require("app/entities/album/album.component");
var album_service_1 = require("app/entities/album/album.service");
var album_model_1 = require("app/shared/model/album.model");
describe('Component Tests', function () {
    describe('Album Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [album_component_1.AlbumComponent],
                providers: []
            })
                .overrideTemplate(album_component_1.AlbumComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(album_component_1.AlbumComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(album_service_1.AlbumService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new album_model_1.Album(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.albums[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=album.component.spec.js.map