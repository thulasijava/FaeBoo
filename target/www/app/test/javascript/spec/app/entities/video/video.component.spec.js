"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var video_component_1 = require("app/entities/video/video.component");
var video_service_1 = require("app/entities/video/video.service");
var video_model_1 = require("app/shared/model/video.model");
describe('Component Tests', function () {
    describe('Video Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [video_component_1.VideoComponent],
                providers: []
            })
                .overrideTemplate(video_component_1.VideoComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(video_component_1.VideoComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(video_service_1.VideoService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new video_model_1.Video(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.videos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=video.component.spec.js.map