"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var metrics_service_1 = require("app/admin/metrics/metrics.service");
var app_constants_1 = require("app/app.constants");
var testing_2 = require("@angular/common/http/testing");
describe('Service Tests', function () {
    describe('Logs Service', function () {
        var service;
        var httpMock;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            service = testing_1.TestBed.get(metrics_service_1.JhiMetricsService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(function () {
            httpMock.verify();
        });
        describe('Service methods', function () {
            it('should call correct URL', function () {
                service.getMetrics().subscribe(function () { });
                var req = httpMock.expectOne({ method: 'GET' });
                var resourceUrl = app_constants_1.SERVER_API_URL + 'management/metrics';
                expect(req.request.url).toEqual(resourceUrl);
            });
            it('should return Metrics', function () {
                var metrics = [];
                service.getMetrics().subscribe(function (received) {
                    expect(received.body[0]).toEqual(metrics);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush([metrics]);
            });
            it('should return Thread Dump', function () {
                var dump = [{ name: 'test1', threadState: 'RUNNABLE' }];
                service.threadDump().subscribe(function (received) {
                    expect(received.body[0]).toEqual(dump);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush([dump]);
            });
        });
    });
});
//# sourceMappingURL=metrics.service.spec.js.map