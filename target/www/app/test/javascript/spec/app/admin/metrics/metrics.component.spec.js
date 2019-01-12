"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var metrics_component_1 = require("app/admin/metrics/metrics.component");
var metrics_service_1 = require("app/admin/metrics/metrics.service");
describe('Component Tests', function () {
    describe('JhiMetricsMonitoringComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [metrics_component_1.JhiMetricsMonitoringComponent]
            })
                .overrideTemplate(metrics_component_1.JhiMetricsMonitoringComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(metrics_component_1.JhiMetricsMonitoringComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(metrics_service_1.JhiMetricsService);
        });
        describe('refresh', function () {
            it('should call refresh on init', function () {
                // GIVEN
                var response = {
                    timers: {
                        service: 'test',
                        unrelatedKey: 'test'
                    },
                    gauges: {
                        'jcache.statistics': {
                            value: 2
                        },
                        unrelatedKey: 'test'
                    }
                };
                spyOn(service, 'getMetrics').and.returnValue(rxjs_1.of(response));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.getMetrics).toHaveBeenCalled();
                expect(comp.servicesStats).toEqual({ service: 'test' });
                expect(comp.cachesStats).toEqual({ jcache: { name: 17, value: 2 } });
            });
        });
        describe('isNan', function () {
            it('should return if a variable is NaN', function () {
                expect(comp.filterNaN(1)).toBe(1);
                expect(comp.filterNaN('test')).toBe(0);
            });
        });
    });
});
//# sourceMappingURL=metrics.component.spec.js.map