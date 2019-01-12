"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ng_jhipster_1 = require("ng-jhipster");
var core_1 = require("app/core");
var app_constants_1 = require("app/app.constants");
var testing_2 = require("@angular/common/http/testing");
describe('Service Tests', function () {
    describe('User Service', function () {
        var service;
        var httpMock;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule],
                providers: [ng_jhipster_1.JhiDateUtils]
            });
            service = testing_1.TestBed.get(core_1.UserService);
            httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
        });
        afterEach(function () {
            httpMock.verify();
        });
        describe('Service methods', function () {
            it('should call correct URL', function () {
                service.find('user').subscribe(function () { });
                var req = httpMock.expectOne({ method: 'GET' });
                var resourceUrl = app_constants_1.SERVER_API_URL + 'api/users';
                expect(req.request.url).toEqual(resourceUrl + "/user");
            });
            it('should return User', function () {
                service.find('user').subscribe(function (received) {
                    expect(received.body.login).toEqual('user');
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush(new core_1.User(1, 'user'));
            });
            it('should return Authorities', function () {
                service.authorities().subscribe(function (_authorities) {
                    expect(_authorities).toEqual(['ROLE_USER', 'ROLE_ADMIN']);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush(['ROLE_USER', 'ROLE_ADMIN']);
            });
            it('should propagate not found response', function () {
                service.find('user').subscribe(null, function (_error) {
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
//# sourceMappingURL=user.service.spec.js.map