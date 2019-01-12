"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var test_module_1 = require("../../../test.module");
var metrics_modal_component_1 = require("app/admin/metrics/metrics-modal.component");
var metrics_service_1 = require("app/admin/metrics/metrics.service");
describe('Component Tests', function () {
    describe('JhiMetricsMonitoringModalComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [metrics_modal_component_1.JhiMetricsMonitoringModalComponent]
            })
                .overrideTemplate(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(metrics_modal_component_1.JhiMetricsMonitoringModalComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(metrics_service_1.JhiMetricsService);
        });
        describe('ngOnInit', function () {
            it('should count the numbers of each thread type', function () {
                comp.threadDump = [
                    { name: 'test1', threadState: 'RUNNABLE' },
                    { name: 'test2', threadState: 'WAITING' },
                    { name: 'test3', threadState: 'TIMED_WAITING' },
                    { name: 'test4', threadState: 'BLOCKED' },
                    { name: 'test5', threadState: 'BLOCKED' },
                    { name: 'test5', threadState: 'NONE' }
                ];
                fixture.detectChanges();
                expect(comp.threadDumpRunnable).toBe(1);
                expect(comp.threadDumpWaiting).toBe(1);
                expect(comp.threadDumpTimedWaiting).toBe(1);
                expect(comp.threadDumpBlocked).toBe(2);
                expect(comp.threadDumpAll).toBe(5);
            });
            it('should return badge-info for WAITING', function () {
                expect(comp.getBadgeClass('WAITING')).toBe('badge-info');
            });
            it('should return badge-warning for TIMED_WAITING', function () {
                expect(comp.getBadgeClass('TIMED_WAITING')).toBe('badge-warning');
            });
            it('should return badge-danger for BLOCKED', function () {
                expect(comp.getBadgeClass('BLOCKED')).toBe('badge-danger');
            });
            it('should return undefined for anything else', function () {
                expect(comp.getBadgeClass('')).toBe(undefined);
            });
        });
        describe('getBadgeClass', function () {
            it('should return badge-success for RUNNABLE', function () {
                expect(comp.getBadgeClass('RUNNABLE')).toBe('badge-success');
            });
            it('should return badge-info for WAITING', function () {
                expect(comp.getBadgeClass('WAITING')).toBe('badge-info');
            });
            it('should return badge-warning for TIMED_WAITING', function () {
                expect(comp.getBadgeClass('TIMED_WAITING')).toBe('badge-warning');
            });
            it('should return badge-danger for BLOCKED', function () {
                expect(comp.getBadgeClass('BLOCKED')).toBe('badge-danger');
            });
            it('should return undefined for anything else', function () {
                expect(comp.getBadgeClass('')).toBe(undefined);
            });
        });
    });
});
//# sourceMappingURL=metrics-modal.component.spec.js.map