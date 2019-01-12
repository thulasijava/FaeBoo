"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var video_detail_component_1 = require("app/entities/video/video-detail.component");
var video_model_1 = require("app/shared/model/video.model");
describe('Component Tests', function () {
    describe('Video Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ video: new video_model_1.Video(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [video_detail_component_1.VideoDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(video_detail_component_1.VideoDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(video_detail_component_1.VideoDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.video).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=video-detail.component.spec.js.map