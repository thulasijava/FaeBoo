"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var password_component_1 = require("app/account/password/password.component");
var password_service_1 = require("app/account/password/password.service");
describe('Component Tests', function () {
    describe('PasswordComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [password_component_1.PasswordComponent],
                providers: []
            })
                .overrideTemplate(password_component_1.PasswordComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(password_component_1.PasswordComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(password_service_1.PasswordService);
        });
        it('should show error if passwords do not match', function () {
            // GIVEN
            comp.newPassword = 'password1';
            comp.confirmPassword = 'password2';
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBe('ERROR');
            expect(comp.error).toBeNull();
            expect(comp.success).toBeNull();
        });
        it('should call Auth.changePassword when passwords match', function () {
            // GIVEN
            var passwordValues = {
                currentPassword: 'oldPassword',
                newPassword: 'myPassword'
            };
            spyOn(service, 'save').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: true })));
            comp.currentPassword = passwordValues.currentPassword;
            comp.newPassword = comp.confirmPassword = passwordValues.newPassword;
            // WHEN
            comp.changePassword();
            // THEN
            expect(service.save).toHaveBeenCalledWith(passwordValues.newPassword, passwordValues.currentPassword);
        });
        it('should set success to OK upon success', function () {
            // GIVEN
            spyOn(service, 'save').and.returnValue(rxjs_1.of(new http_1.HttpResponse({ body: true })));
            comp.newPassword = comp.confirmPassword = 'myPassword';
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBeNull();
            expect(comp.error).toBeNull();
            expect(comp.success).toBe('OK');
        });
        it('should notify of error if change password fails', function () {
            // GIVEN
            spyOn(service, 'save').and.returnValue(rxjs_1.throwError('ERROR'));
            comp.newPassword = comp.confirmPassword = 'myPassword';
            // WHEN
            comp.changePassword();
            // THEN
            expect(comp.doNotMatch).toBeNull();
            expect(comp.success).toBeNull();
            expect(comp.error).toBe('ERROR');
        });
    });
});
//# sourceMappingURL=password.component.spec.js.map