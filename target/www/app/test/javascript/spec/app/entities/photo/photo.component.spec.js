"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var photo_component_1 = require("app/entities/photo/photo.component");
var photo_service_1 = require("app/entities/photo/photo.service");
var photo_model_1 = require("app/shared/model/photo.model");
describe('Component Tests', function () {
    describe('Photo Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [photo_component_1.PhotoComponent],
                providers: []
            })
                .overrideTemplate(photo_component_1.PhotoComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(photo_component_1.PhotoComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(photo_service_1.PhotoService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new photo_model_1.Photo(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.photos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=photo.component.spec.js.map