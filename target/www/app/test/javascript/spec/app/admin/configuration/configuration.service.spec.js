"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var configuration_service_1 = require("app/admin/configuration/configuration.service");
var app_constants_1 = require("app/app.constants");
var testing_2 = require("@angular/common/http/testing");
var http_1 = require("@angular/common/http");
describe('Service Tests', function () {
    describe('Logs Service', function () {
        var service;
        var httpMock;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            service = testing_1.TestBed.get(configuration_service_1.JhiConfigurationService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(function () {
            httpMock.verify();
        });
        describe('Service methods', function () {
            it('should call correct URL', function () {
                service.get().subscribe(function () { });
                var req = httpMock.expectOne({ method: 'GET' });
                var resourceUrl = app_constants_1.SERVER_API_URL + 'management/configprops';
                expect(req.request.url).toEqual(resourceUrl);
            });
            it('should get the config', function () {
                var angularConfig = {
                    contexts: {
                        angular: {
                            beans: ['test2']
                        }
                    }
                };
                service.get().subscribe(function (received) {
                    expect(received.body[0]).toEqual(angularConfig);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush(angularConfig);
            });
            it('should get the env', function () {
                var propertySources = new http_1.HttpResponse({
                    body: [{ name: 'test1', properties: 'test1' }, { name: 'test2', properties: 'test2' }]
                });
                service.get().subscribe(function (received) {
                    expect(received.body[0]).toEqual(propertySources);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush(propertySources);
            });
        });
    });
});
//# sourceMappingURL=configuration.service.spec.js.map