"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var ng_jhipster_1 = require("ng-jhipster");
var test_module_1 = require("../../../test.module");
var shared_1 = require("app/shared");
var register_service_1 = require("app/account/register/register.service");
var register_component_1 = require("app/account/register/register.component");
describe('Component Tests', function () {
    describe('RegisterComponent', function () {
        var fixture;
        var comp;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [register_component_1.RegisterComponent]
            })
                .overrideTemplate(register_component_1.RegisterComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(register_component_1.RegisterComponent);
            comp = fixture.componentInstance;
            comp.ngOnInit();
        });
        it('should ensure the two passwords entered match', function () {
            comp.registerAccount.password = 'password';
            comp.confirmPassword = 'non-matching';
            comp.register();
            expect(comp.doNotMatch).toEqual('ERROR');
        });
        it('should update success to OK after creating an account', testing_1.inject([register_service_1.Register, ng_jhipster_1.JhiLanguageService], testing_1.fakeAsync(function (service, mockTranslate) {
            spyOn(service, 'save').and.returnValue(rxjs_1.of({}));
            comp.registerAccount.password = comp.confirmPassword = 'password';
            comp.register();
            testing_1.tick();
            expect(service.save).toHaveBeenCalledWith({
                password: 'password',
                langKey: 'en'
            });
            expect(comp.success).toEqual(true);
            expect(comp.registerAccount.langKey).toEqual('en');
            expect(mockTranslate.getCurrentSpy).toHaveBeenCalled();
            expect(comp.errorUserExists).toBeNull();
            expect(comp.errorEmailExists).toBeNull();
            expect(comp.error).toBeNull();
        })));
        it('should notify of user existence upon 400/login already in use', testing_1.inject([register_service_1.Register], testing_1.fakeAsync(function (service) {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError({
                status: 400,
                error: { type: shared_1.LOGIN_ALREADY_USED_TYPE }
            }));
            comp.registerAccount.password = comp.confirmPassword = 'password';
            comp.register();
            testing_1.tick();
            expect(comp.errorUserExists).toEqual('ERROR');
            expect(comp.errorEmailExists).toBeNull();
            expect(comp.error).toBeNull();
        })));
        it('should notify of email existence upon 400/email address already in use', testing_1.inject([register_service_1.Register], testing_1.fakeAsync(function (service) {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError({
                status: 400,
                error: { type: shared_1.EMAIL_ALREADY_USED_TYPE }
            }));
            comp.registerAccount.password = comp.confirmPassword = 'password';
            comp.register();
            testing_1.tick();
            expect(comp.errorEmailExists).toEqual('ERROR');
            expect(comp.errorUserExists).toBeNull();
            expect(comp.error).toBeNull();
        })));
        it('should notify of generic error', testing_1.inject([register_service_1.Register], testing_1.fakeAsync(function (service) {
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError({
                status: 503
            }));
            comp.registerAccount.password = comp.confirmPassword = 'password';
            comp.register();
            testing_1.tick();
            expect(comp.errorUserExists).toBeNull();
            expect(comp.errorEmailExists).toBeNull();
            expect(comp.error).toEqual('ERROR');
        })));
    });
});
//# sourceMappingURL=register.component.spec.js.map