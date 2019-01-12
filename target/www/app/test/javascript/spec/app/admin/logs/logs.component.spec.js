"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var logs_component_1 = require("app/admin/logs/logs.component");
var logs_service_1 = require("app/admin/logs/logs.service");
var admin_1 = require("app/admin");
describe('Component Tests', function () {
    describe('LogsComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [logs_component_1.LogsComponent],
                providers: [logs_service_1.LogsService]
            })
                .overrideTemplate(logs_component_1.LogsComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(logs_component_1.LogsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(logs_service_1.LogsService);
        });
        describe('OnInit', function () {
            it('should set all default values correctly', function () {
                expect(comp.filter).toBe('');
                expect(comp.orderProp).toBe('name');
                expect(comp.reverse).toBe(false);
            });
            it('Should call load all on init', function () {
                // GIVEN
                var headers = new http_1.HttpHeaders().append('link', 'link;link');
                var log = new admin_1.Log('main', 'WARN');
                spyOn(service, 'findAll').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                    body: [log],
                    headers: headers
                })));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.findAll).toHaveBeenCalled();
                expect(comp.loggers[0]).toEqual(jasmine.objectContaining(log));
            });
        });
        describe('change log level', function () {
            it('should change log level correctly', function () {
                // GIVEN
                var log = new admin_1.Log('main', 'ERROR');
                spyOn(service, 'changeLevel').and.returnValue(rxjs_1.of(new http_1.HttpResponse()));
                spyOn(service, 'findAll').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: [log] })));
                // WHEN
                comp.changeLevel('main', 'ERROR');
                // THEN
                expect(service.changeLevel).toHaveBeenCalled();
                expect(service.findAll).toHaveBeenCalled();
                expect(comp.loggers[0]).toEqual(jasmine.objectContaining(log));
            });
        });
    });
});
//# sourceMappingURL=logs.component.spec.js.map