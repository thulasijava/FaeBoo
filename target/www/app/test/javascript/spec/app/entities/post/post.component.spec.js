"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var post_component_1 = require("app/entities/post/post.component");
var post_service_1 = require("app/entities/post/post.service");
var post_model_1 = require("app/shared/model/post.model");
describe('Component Tests', function () {
    describe('Post Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [post_component_1.PostComponent],
                providers: []
            })
                .overrideTemplate(post_component_1.PostComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(post_component_1.PostComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(post_service_1.PostService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new post_model_1.Post(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.posts[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=post.component.spec.js.map