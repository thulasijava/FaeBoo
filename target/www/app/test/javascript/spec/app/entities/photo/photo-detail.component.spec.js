"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var photo_detail_component_1 = require("app/entities/photo/photo-detail.component");
var photo_model_1 = require("app/shared/model/photo.model");
describe('Component Tests', function () {
    describe('Photo Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ photo: new photo_model_1.Photo(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [photo_detail_component_1.PhotoDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(photo_detail_component_1.PhotoDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(photo_detail_component_1.PhotoDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.photo).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=photo-detail.component.spec.js.map