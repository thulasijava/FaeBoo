"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var account_details_component_1 = require("app/entities/account-details/account-details.component");
var account_details_service_1 = require("app/entities/account-details/account-details.service");
var account_details_model_1 = require("app/shared/model/account-details.model");
describe('Component Tests', function () {
    describe('AccountDetails Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [account_details_component_1.AccountDetailsComponent],
                providers: []
            })
                .overrideTemplate(account_details_component_1.AccountDetailsComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(account_details_component_1.AccountDetailsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(account_details_service_1.AccountDetailsService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                body: [new account_details_model_1.AccountDetails(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.accountDetails[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=account-details.component.spec.js.map