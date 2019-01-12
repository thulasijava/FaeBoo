"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var account_details_detail_component_1 = require("app/entities/account-details/account-details-detail.component");
var account_details_model_1 = require("app/shared/model/account-details.model");
describe('Component Tests', function () {
    describe('AccountDetails Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: rxjs_1.of({ accountDetails: new account_details_model_1.AccountDetails(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [account_details_detail_component_1.AccountDetailsDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(account_details_detail_component_1.AccountDetailsDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(account_details_detail_component_1.AccountDetailsDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.accountDetails).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=account-details-detail.component.spec.js.map