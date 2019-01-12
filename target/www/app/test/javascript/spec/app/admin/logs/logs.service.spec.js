"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var logs_service_1 = require("app/admin/logs/logs.service");
var log_model_1 = require("app/admin/logs/log.model");
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
            service = testing_1.TestBed.get(logs_service_1.LogsService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(function () {
            httpMock.verify();
        });
        describe('Service methods', function () {
            it('should call correct URL', function () {
                service.findAll().subscribe(function () { });
                var req = httpMock.expectOne({ method: 'GET' });
                var resourceUrl = app_constants_1.SERVER_API_URL + 'management/logs';
                expect(req.request.url).toEqual(resourceUrl);
            });
            it('should return Logs', function () {
                var log = new log_model_1.Log('main', 'ERROR');
                service.findAll().subscribe(function (received) {
                    expect(received.body[0]).toEqual(log);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush([log]);
            });
            it('should change log level', function () {
                var log = new log_model_1.Log('main', 'ERROR');
                service.changeLevel(log).subscribe(function (received) {
                    expect(received.body[0]).toEqual(log);
                });
                var req = httpMock.expectOne({ method: 'PUT' });
                req.flush([log]);
            });
        });
    });
});
//# sourceMappingURL=logs.service.spec.js.map