"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var login_service_1 = require("app/core/login/login.service");
var login_component_1 = require("app/shared/login/login.component");
var state_storage_service_1 = require("app/core/auth/state-storage.service");
var test_module_1 = require("../../../test.module");
var mock_login_service_1 = require("../../../helpers/mock-login.service");
var mock_state_storage_service_1 = require("../../../helpers/mock-state-storage.service");
describe('Component Tests', function () {
    describe('LoginComponent', function () {
        var comp;
        var fixture;
        var mockLoginService;
        var mockStateStorageService;
        var mockRouter;
        var mockEventManager;
        var mockActiveModal;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [login_component_1.JhiLoginModalComponent],
                providers: [
                    {
                        provide: login_service_1.LoginService,
                        useClass: mock_login_service_1.MockLoginService
                    },
                    {
                        provide: state_storage_service_1.StateStorageService,
                        useClass: mock_state_storage_service_1.MockStateStorageService
                    }
                ]
            })
                .overrideTemplate(login_component_1.JhiLoginModalComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(login_component_1.JhiLoginModalComponent);
            comp = fixture.componentInstance;
            mockLoginService = fixture.debugElement.injector.get(login_service_1.LoginService);
            mockStateStorageService = fixture.debugElement.injector.get(state_storage_service_1.StateStorageService);
            mockRouter = fixture.debugElement.injector.get(router_1.Router);
            mockEventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(ng_bootstrap_1.NgbActiveModal);
        });
        it('should authenticate the user upon login when previous state was set', testing_1.inject([], testing_1.fakeAsync(function () {
            // GIVEN
            var credentials = {
                username: 'admin',
                password: 'admin',
                rememberMe: true
            };
            comp.username = 'admin';
            comp.password = 'admin';
            comp.rememberMe = true;
            comp.credentials = credentials;
            mockLoginService.setResponse({});
            mockStateStorageService.setResponse({ redirect: 'dummy' });
            // WHEN/
            comp.login();
            testing_1.tick(); // simulate async
            // THEN
            expect(comp.authenticationError).toEqual(false);
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('login success');
            expect(mockEventManager.broadcastSpy).toHaveBeenCalledTimes(1);
            expect(mockLoginService.loginSpy).toHaveBeenCalledWith(credentials);
            expect(mockStateStorageService.getUrlSpy).toHaveBeenCalledTimes(1);
            expect(mockStateStorageService.storeUrlSpy).toHaveBeenCalledWith(null);
            expect(mockRouter.navigateSpy).toHaveBeenCalledWith([{ redirect: 'dummy' }]);
        })));
        it('should authenticate the user upon login when previous state was not set', testing_1.inject([], testing_1.fakeAsync(function () {
            // GIVEN
            var credentials = {
                username: 'admin',
                password: 'admin',
                rememberMe: true
            };
            comp.username = 'admin';
            comp.password = 'admin';
            comp.rememberMe = true;
            comp.credentials = credentials;
            mockLoginService.setResponse({});
            mockStateStorageService.setResponse(null);
            // WHEN
            comp.login();
            testing_1.tick(); // simulate async
            // THEN
            expect(comp.authenticationError).toEqual(false);
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('login success');
            expect(mockEventManager.broadcastSpy).toHaveBeenCalledTimes(1);
            expect(mockLoginService.loginSpy).toHaveBeenCalledWith(credentials);
            expect(mockStateStorageService.getUrlSpy).toHaveBeenCalledTimes(1);
            expect(mockStateStorageService.storeUrlSpy).not.toHaveBeenCalled();
            expect(mockRouter.navigateSpy).not.toHaveBeenCalled();
        })));
        it('should empty the credentials upon cancel', function () {
            // GIVEN
            var credentials = {
                username: 'admin',
                password: 'admin',
                rememberMe: true
            };
            var expected = {
                username: null,
                password: null,
                rememberMe: true
            };
            comp.credentials = credentials;
            // WHEN
            comp.cancel();
            // THEN
            expect(comp.authenticationError).toEqual(false);
            expect(comp.credentials).toEqual(expected);
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('cancel');
        });
        it('should redirect user when register', function () {
            // WHEN
            comp.register();
            // THEN
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('to state register');
            expect(mockRouter.navigateSpy).toHaveBeenCalledWith(['/register']);
        });
        it('should redirect user when request password', function () {
            // WHEN
            comp.requestResetPassword();
            // THEN
            expect(mockActiveModal.dismissSpy).toHaveBeenCalledWith('to state requestReset');
            expect(mockRouter.navigateSpy).toHaveBeenCalledWith(['/reset', 'request']);
        });
    });
});
//# sourceMappingURL=login.component.spec.js.map