"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var audits_service_1 = require("app/admin/audits/audits.service");
var audit_model_1 = require("app/admin/audits/audit.model");
var app_constants_1 = require("app/app.constants");
var testing_2 = require("@angular/common/http/testing");
describe('Service Tests', function () {
    describe('Audits Service', function () {
        var service;
        var httpMock;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule]
            });
            service = testing_1.TestBed.get(audits_service_1.AuditsService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(function () {
            httpMock.verify();
        });
        describe('Service methods', function () {
            it('should call correct URL', function () {
                service.query({}).subscribe(function () { });
                var req = httpMock.expectOne({ method: 'GET' });
                var resourceUrl = app_constants_1.SERVER_API_URL + 'management/audits';
                expect(req.request.url).toEqual(resourceUrl);
            });
            it('should return Audits', function () {
                var audit = new audit_model_1.Audit({ remoteAddress: '127.0.0.1', sessionId: '123' }, 'user', '20140101', 'AUTHENTICATION_SUCCESS');
                service.query({}).subscribe(function (received) {
                    expect(received.body[0]).toEqual(audit);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush([audit]);
            });
            it('should propagate not found response', function () {
                service.query({}).subscribe(null, function (_error) {
                    expect(_error.status).toEqual(404);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush('Invalid request parameters', {
                    status: 404,
                    statusText: 'Bad Request'
                });
            });
        });
    });
});
//# sourceMappingURL=audits.service.spec.js.map