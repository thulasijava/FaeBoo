"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var mock_route_service_1 = require("../../../helpers/mock-route.service");
var activate_service_1 = require("app/account/activate/activate.service");
var activate_component_1 = require("app/account/activate/activate.component");
describe('Component Tests', function () {
    describe('ActivateComponent', function () {
        var comp;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [activate_component_1.ActivateComponent],
                providers: [
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: new mock_route_service_1.MockActivatedRoute({ key: 'ABC123' })
                    }
                ]
            })
                .overrideTemplate(activate_component_1.ActivateComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            var fixture = testing_1.TestBed.createComponent(activate_component_1.ActivateComponent);
            comp = fixture.componentInstance;
        });
        it('calls activate.get with the key from params', testing_1.inject([activate_service_1.ActivateService], testing_1.fakeAsync(function (service) {
            spyOn(service, 'get').and.returnValue(rxjs_1.of());
            comp.ngOnInit();
            testing_1.tick();
            expect(service.get).toHaveBeenCalledWith('ABC123');
        })));
        it('should set set success to OK upon successful activation', testing_1.inject([activate_service_1.ActivateService], testing_1.fakeAsync(function (service) {
            spyOn(service, 'get').and.returnValue(rxjs_1.of({}));
            comp.ngOnInit();
            testing_1.tick();
            expect(comp.error).toBe(null);
            expect(comp.success).toEqual('OK');
        })));
        it('should set set error to ERROR upon activation failure', testing_1.inject([activate_service_1.ActivateService], testing_1.fakeAsync(function (service) {
            spyOn(service, 'get').and.returnValue(rxjs_1.throwError('ERROR'));
            comp.ngOnInit();
            testing_1.tick();
            expect(comp.error).toBe('ERROR');
            expect(comp.success).toEqual(null);
        })));
    });
});
//# sourceMappingURL=activate.component.spec.js.map