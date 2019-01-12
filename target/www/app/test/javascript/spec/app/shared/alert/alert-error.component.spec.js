"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var ng_jhipster_1 = require("ng-jhipster");
var core_1 = require("@ngx-translate/core");
var test_module_1 = require("../../../test.module");
var alert_error_component_1 = require("app/shared/alert/alert-error.component");
var mock_alert_service_1 = require("../../../helpers/mock-alert.service");
describe('Component Tests', function () {
    describe('Alert Error Component', function () {
        var comp;
        var fixture;
        var eventManager;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule, core_1.TranslateModule.forRoot()],
                declarations: [alert_error_component_1.JhiAlertErrorComponent],
                providers: [
                    ng_jhipster_1.JhiEventManager,
                    {
                        provide: ng_jhipster_1.JhiAlertService,
                        useClass: mock_alert_service_1.MockAlertService
                    }
                ]
            })
                .overrideTemplate(alert_error_component_1.JhiAlertErrorComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(alert_error_component_1.JhiAlertErrorComponent);
            comp = fixture.componentInstance;
            eventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
        });
        describe('Error Handling', function () {
            it('Should display an alert on status 0', function () {
                // GIVEN
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: { status: 0 } });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.server.not.reachable');
            });
            it('Should display an alert on status 404', function () {
                // GIVEN
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: { status: 404 } });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.url.not.found');
            });
            it('Should display an alert on generic error', function () {
                // GIVEN
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: { error: { message: 'Error Message' } } });
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: { error: 'Second Error Message' } });
                // THEN
                expect(comp.alerts.length).toBe(2);
                expect(comp.alerts[0].msg).toBe('Error Message');
                expect(comp.alerts[1].msg).toBe('Second Error Message');
            });
            it('Should display an alert on status 400 for generic error', function () {
                // GIVEN
                var response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders(),
                    status: 400,
                    statusText: 'Bad Request',
                    error: {
                        type: 'https://www.jhipster.tech/problem/constraint-violation',
                        title: 'Bad Request',
                        status: 400,
                        path: '/api/foos',
                        message: 'error.validation'
                    }
                });
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.validation');
            });
            it('Should display an alert on status 400 for generic error without message', function () {
                // GIVEN
                var response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders(),
                    status: 400,
                    error: 'Bad Request'
                });
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('Bad Request');
            });
            it('Should display an alert on status 400 for invalid parameters', function () {
                // GIVEN
                var response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders(),
                    status: 400,
                    statusText: 'Bad Request',
                    error: {
                        type: 'https://www.jhipster.tech/problem/constraint-violation',
                        title: 'Method argument not valid',
                        status: 400,
                        path: '/api/foos',
                        message: 'error.validation',
                        fieldErrors: [{ objectName: 'foo', field: 'minField', message: 'Min' }]
                    }
                });
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('error.Size');
            });
            it('Should display an alert on status 400 for error headers', function () {
                // GIVEN
                var response = new http_1.HttpErrorResponse({
                    url: 'http://localhost:8080/api/foos',
                    headers: new http_1.HttpHeaders().append('app-error', 'Error Message').append('app-params', 'foo'),
                    status: 400,
                    statusText: 'Bad Request',
                    error: {
                        status: 400,
                        message: 'error.validation'
                    }
                });
                eventManager.broadcast({ name: 'faeBooApp.httpError', content: response });
                // THEN
                expect(comp.alerts.length).toBe(1);
                expect(comp.alerts[0].msg).toBe('Error Message');
            });
        });
    });
});
//# sourceMappingURL=alert-error.component.spec.js.map