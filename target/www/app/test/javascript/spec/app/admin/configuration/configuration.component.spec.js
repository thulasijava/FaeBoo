"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var configuration_component_1 = require("app/admin/configuration/configuration.component");
var configuration_service_1 = require("app/admin/configuration/configuration.service");
describe('Component Tests', function () {
    describe('JhiConfigurationComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [configuration_component_1.JhiConfigurationComponent],
                providers: [configuration_service_1.JhiConfigurationService]
            })
                .overrideTemplate(configuration_component_1.JhiConfigurationComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(configuration_component_1.JhiConfigurationComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(configuration_service_1.JhiConfigurationService);
        });
        describe('OnInit', function () {
            it('should set all default values correctly', function () {
                expect(comp.configKeys).toEqual([]);
                expect(comp.filter).toBe('');
                expect(comp.orderProp).toBe('prefix');
                expect(comp.reverse).toBe(false);
            });
            it('Should call load all on init', function () {
                // GIVEN
                var body = [{ config: 'test', properties: 'test' }, { config: 'test2' }];
                var envConfig = { envConfig: 'test' };
                spyOn(service, 'get').and.returnValue(rxjs_1.of(body));
                spyOn(service, 'getEnv').and.returnValue(rxjs_1.of(envConfig));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.get).toHaveBeenCalled();
                expect(service.getEnv).toHaveBeenCalled();
                expect(comp.configKeys).toEqual([['0', '1', '2', '3']]);
                expect(comp.allConfiguration).toEqual(envConfig);
            });
        });
        describe('keys method', function () {
            it('should return the keys of an Object', function () {
                // GIVEN
                var data = {
                    key1: 'test',
                    key2: 'test2'
                };
                // THEN
                expect(comp.keys(data)).toEqual(['key1', 'key2']);
                expect(comp.keys(undefined)).toEqual([]);
            });
        });
    });
});
//# sourceMappingURL=configuration.component.spec.js.map