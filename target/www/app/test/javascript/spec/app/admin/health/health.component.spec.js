"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var test_module_1 = require("../../../test.module");
var health_component_1 = require("app/admin/health/health.component");
var health_service_1 = require("app/admin/health/health.service");
describe('Component Tests', function () {
    describe('JhiHealthCheckComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [health_component_1.JhiHealthCheckComponent]
            })
                .overrideTemplate(health_component_1.JhiHealthCheckComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(health_component_1.JhiHealthCheckComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(health_service_1.JhiHealthService);
        });
        describe('baseName and subSystemName', function () {
            it('should return the basename when it has no sub system', function () {
                expect(comp.baseName('base')).toBe('base');
            });
            it('should return the basename when it has sub systems', function () {
                expect(comp.baseName('base.subsystem.system')).toBe('base');
            });
            it('should return the sub system name', function () {
                expect(comp.subSystemName('subsystem')).toBe('');
            });
            it('should return the subsystem when it has multiple keys', function () {
                expect(comp.subSystemName('subsystem.subsystem.system')).toBe(' - subsystem.system');
            });
        });
        describe('transformHealthData', function () {
            it('should flatten empty health data', function () {
                var data = {};
                var expected = [];
                expect(service.transformHealthData(data)).toEqual(expected);
            });
            it('should flatten health data with no subsystems', function () {
                var data = {
                    details: {
                        status: 'UP',
                        db: {
                            status: 'UP',
                            database: 'H2',
                            hello: '1'
                        },
                        mail: {
                            status: 'UP',
                            error: 'mail.a.b.c'
                        }
                    }
                };
                var expected = [
                    {
                        name: 'db',
                        status: 'UP',
                        details: {
                            database: 'H2',
                            hello: '1'
                        }
                    },
                    {
                        name: 'mail',
                        error: 'mail.a.b.c',
                        status: 'UP'
                    }
                ];
                expect(service.transformHealthData(data)).toEqual(expected);
            });
            it('should flatten health data with subsystems at level 1, main system has no additional information', function () {
                var data = {
                    details: {
                        status: 'UP',
                        db: {
                            status: 'UP',
                            database: 'H2',
                            hello: '1'
                        },
                        mail: {
                            status: 'UP',
                            error: 'mail.a.b.c'
                        },
                        system: {
                            status: 'DOWN',
                            subsystem1: {
                                status: 'UP',
                                property1: 'system.subsystem1.property1'
                            },
                            subsystem2: {
                                status: 'DOWN',
                                error: 'system.subsystem1.error',
                                property2: 'system.subsystem2.property2'
                            }
                        }
                    }
                };
                var expected = [
                    {
                        name: 'db',
                        status: 'UP',
                        details: {
                            database: 'H2',
                            hello: '1'
                        }
                    },
                    {
                        name: 'mail',
                        error: 'mail.a.b.c',
                        status: 'UP'
                    },
                    {
                        name: 'system.subsystem1',
                        status: 'UP',
                        details: {
                            property1: 'system.subsystem1.property1'
                        }
                    },
                    {
                        name: 'system.subsystem2',
                        error: 'system.subsystem1.error',
                        status: 'DOWN',
                        details: {
                            property2: 'system.subsystem2.property2'
                        }
                    }
                ];
                expect(service.transformHealthData(data)).toEqual(expected);
            });
            it('should flatten health data with subsystems at level 1, main system has additional information', function () {
                var data = {
                    details: {
                        status: 'UP',
                        db: {
                            status: 'UP',
                            database: 'H2',
                            hello: '1'
                        },
                        mail: {
                            status: 'UP',
                            error: 'mail.a.b.c'
                        },
                        system: {
                            status: 'DOWN',
                            property1: 'system.property1',
                            subsystem1: {
                                status: 'UP',
                                property1: 'system.subsystem1.property1'
                            },
                            subsystem2: {
                                status: 'DOWN',
                                error: 'system.subsystem1.error',
                                property2: 'system.subsystem2.property2'
                            }
                        }
                    }
                };
                var expected = [
                    {
                        name: 'db',
                        status: 'UP',
                        details: {
                            database: 'H2',
                            hello: '1'
                        }
                    },
                    {
                        name: 'mail',
                        error: 'mail.a.b.c',
                        status: 'UP'
                    },
                    {
                        name: 'system',
                        status: 'DOWN',
                        details: {
                            property1: 'system.property1'
                        }
                    },
                    {
                        name: 'system.subsystem1',
                        status: 'UP',
                        details: {
                            property1: 'system.subsystem1.property1'
                        }
                    },
                    {
                        name: 'system.subsystem2',
                        error: 'system.subsystem1.error',
                        status: 'DOWN',
                        details: {
                            property2: 'system.subsystem2.property2'
                        }
                    }
                ];
                expect(service.transformHealthData(data)).toEqual(expected);
            });
            it('should flatten health data with subsystems at level 1, main system has additional error', function () {
                var data = {
                    details: {
                        status: 'UP',
                        db: {
                            status: 'UP',
                            database: 'H2',
                            hello: '1'
                        },
                        mail: {
                            status: 'UP',
                            error: 'mail.a.b.c'
                        },
                        system: {
                            status: 'DOWN',
                            error: 'show me',
                            subsystem1: {
                                status: 'UP',
                                property1: 'system.subsystem1.property1'
                            },
                            subsystem2: {
                                status: 'DOWN',
                                error: 'system.subsystem1.error',
                                property2: 'system.subsystem2.property2'
                            }
                        }
                    }
                };
                var expected = [
                    {
                        name: 'db',
                        status: 'UP',
                        details: {
                            database: 'H2',
                            hello: '1'
                        }
                    },
                    {
                        name: 'mail',
                        error: 'mail.a.b.c',
                        status: 'UP'
                    },
                    {
                        name: 'system',
                        error: 'show me',
                        status: 'DOWN'
                    },
                    {
                        name: 'system.subsystem1',
                        status: 'UP',
                        details: {
                            property1: 'system.subsystem1.property1'
                        }
                    },
                    {
                        name: 'system.subsystem2',
                        error: 'system.subsystem1.error',
                        status: 'DOWN',
                        details: {
                            property2: 'system.subsystem2.property2'
                        }
                    }
                ];
                expect(service.transformHealthData(data)).toEqual(expected);
            });
        });
        describe('getBadgeClass', function () {
            it('should get badge class', function () {
                var upBadgeClass = comp.getBadgeClass('UP');
                var downBadgeClass = comp.getBadgeClass('DOWN');
                expect(upBadgeClass).toEqual('badge-success');
                expect(downBadgeClass).toEqual('badge-danger');
            });
        });
        describe('refresh', function () {
            it('should call refresh on init', function () {
                // GIVEN
                spyOn(service, 'checkHealth').and.returnValue(rxjs_1.of(new http_1.HttpResponse()));
                spyOn(service, 'transformHealthData').and.returnValue(rxjs_1.of({ data: 'test' }));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.checkHealth).toHaveBeenCalled();
                expect(service.transformHealthData).toHaveBeenCalled();
                expect(comp.healthData.value).toEqual({ data: 'test' });
            });
            it('should handle a 503 on refreshing health data', function () {
                // GIVEN
                spyOn(service, 'checkHealth').and.returnValue(rxjs_1.throwError(new http_1.HttpErrorResponse({ status: 503, error: 'Mail down' })));
                spyOn(service, 'transformHealthData').and.returnValue(rxjs_1.of({ health: 'down' }));
                // WHEN
                comp.refresh();
                // THEN
                expect(service.checkHealth).toHaveBeenCalled();
                expect(service.transformHealthData).toHaveBeenCalled();
                expect(comp.healthData.value).toEqual({ health: 'down' });
            });
        });
    });
});
//# sourceMappingURL=health.component.spec.js.map