"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var comment_detail_component_1 = require("app/entities/comment/comment-detail.component");
var comment_model_1 = require("app/shared/model/comment.model");
describe('Component Tests', function () {
    describe('Comment Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ comment: new comment_model_1.Comment(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [comment_detail_component_1.CommentDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(comment_detail_component_1.CommentDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(comment_detail_component_1.CommentDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.comment).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=comment-detail.component.spec.js.map