"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var post_detail_component_1 = require("app/entities/post/post-detail.component");
var post_model_1 = require("app/shared/model/post.model");
describe('Component Tests', function () {
    describe('Post Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ post: new post_model_1.Post(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [post_detail_component_1.PostDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(post_detail_component_1.PostDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(post_detail_component_1.PostDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.post).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=post-detail.component.spec.js.map