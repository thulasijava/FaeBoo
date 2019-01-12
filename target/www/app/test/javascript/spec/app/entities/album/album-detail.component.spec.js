"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var album_detail_component_1 = require("app/entities/album/album-detail.component");
var album_model_1 = require("app/shared/model/album.model");
describe('Component Tests', function () {
    describe('Album Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ album: new album_model_1.Album(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [album_detail_component_1.AlbumDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(album_detail_component_1.AlbumDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(album_detail_component_1.AlbumDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.album).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=album-detail.component.spec.js.map