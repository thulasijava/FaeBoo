"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var comment_component_1 = require("app/entities/comment/comment.component");
var comment_service_1 = require("app/entities/comment/comment.service");
var comment_model_1 = require("app/shared/model/comment.model");
describe('Component Tests', function () {
    describe('Comment Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [comment_component_1.CommentComponent],
                providers: []
            })
                .overrideTemplate(comment_component_1.CommentComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(comment_component_1.CommentComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(comment_service_1.CommentService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new comment_model_1.Comment(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.comments[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=comment.component.spec.js.map