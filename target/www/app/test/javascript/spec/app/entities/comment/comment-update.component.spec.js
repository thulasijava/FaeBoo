"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var comment_update_component_1 = require("app/entities/comment/comment-update.component");
var comment_service_1 = require("app/entities/comment/comment.service");
var comment_model_1 = require("app/shared/model/comment.model");
describe('Component Tests', function () {
    describe('Comment Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [comment_update_component_1.CommentUpdateComponent]
            })
                .overrideTemplate(comment_update_component_1.CommentUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(comment_update_component_1.CommentUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(comment_service_1.CommentService);
        });
        describe('save', function () {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new comment_model_1.Comment(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.comment = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new comment_model_1.Comment();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.comment = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
//# sourceMappingURL=comment-update.component.spec.js.map