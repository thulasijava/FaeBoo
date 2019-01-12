"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var post_update_component_1 = require("app/entities/post/post-update.component");
var post_service_1 = require("app/entities/post/post.service");
var post_model_1 = require("app/shared/model/post.model");
describe('Component Tests', function () {
    describe('Post Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [post_update_component_1.PostUpdateComponent]
            })
                .overrideTemplate(post_update_component_1.PostUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(post_update_component_1.PostUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(post_service_1.PostService);
        });
        describe('save', function () {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new post_model_1.Post(123);
                spyOn(service, 'update').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.post = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new post_model_1.Post();
                spyOn(service, 'create').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: entity })));
                comp.post = entity;
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
//# sourceMappingURL=post-update.component.spec.js.map