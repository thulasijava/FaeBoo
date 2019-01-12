"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../test.module");
var audits_component_1 = require("app/admin/audits/audits.component");
var audits_service_1 = require("app/admin/audits/audits.service");
var audit_model_1 = require("app/admin/audits/audit.model");
var shared_1 = require("app/shared");
function build2DigitsDatePart(datePart) {
    return ("0" + datePart).slice(-2);
}
function getDate(isToday) {
    if (isToday === void 0) { isToday = true; }
    var date = new Date();
    if (isToday) {
        // Today + 1 day - needed if the current day must be included
        date.setDate(date.getDate() + 1);
    }
    else {
        // get last month
        if (date.getMonth() === 0) {
            date = new Date(date.getFullYear() - 1, 11, date.getDate());
        }
        else {
            date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        }
    }
    var monthString = build2DigitsDatePart(date.getMonth() + 1);
    var dateString = build2DigitsDatePart(date.getDate());
    return date.getFullYear() + "-" + monthString + "-" + dateString;
}
describe('Component Tests', function () {
    describe('AuditsComponent', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.FaeBooTestModule],
                declarations: [audits_component_1.AuditsComponent],
                providers: [audits_service_1.AuditsService]
            })
                .overrideTemplate(audits_component_1.AuditsComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(audits_component_1.AuditsComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(audits_service_1.AuditsService);
        });
        describe('today function ', function () {
            it('should set toDate to current date', function () {
                comp.today();
                expect(comp.toDate).toBe(getDate());
            });
        });
        describe('previousMonth function ', function () {
            it('should set fromDate to current date', function () {
                comp.previousMonth();
                expect(comp.fromDate).toBe(getDate(false));
            });
        });
        describe('By default, on init', function () {
            it('should set all default values correctly', function () {
                fixture.detectChanges();
                expect(comp.toDate).toBe(getDate());
                expect(comp.fromDate).toBe(getDate(false));
                expect(comp.itemsPerPage).toBe(shared_1.ITEMS_PER_PAGE);
                expect(comp.page).toBe(10);
                expect(comp.reverse).toBeFalsy();
                expect(comp.predicate).toBe('id');
            });
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                var headers = new http_1.HttpHeaders().append('link', 'link;link');
                var audit = new audit_model_1.Audit({ remoteAddress: '127.0.0.1', sessionId: '123' }, 'user', '20140101', 'AUTHENTICATION_SUCCESS');
                spyOn(service, 'query').and.returnValue(rxjs_1.of(new http_1.HttpResponse({
                    body: [audit],
                    headers: headers
                })));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.audits[0]).toEqual(jasmine.objectContaining(audit));
            });
        });
        describe('Create sort object', function () {
            it('Should sort only by id asc', function () {
                // GIVEN
                comp.predicate = 'id';
                comp.reverse = false;
                // WHEN
                var sort = comp.sort();
                // THEN
                expect(sort.length).toEqual(1);
                expect(sort[0]).toEqual('id,desc');
            });
            it('Should sort by timestamp asc then by id', function () {
                // GIVEN
                comp.predicate = 'timestamp';
                comp.reverse = true;
                // WHEN
                var sort = comp.sort();
                // THEN
                expect(sort.length).toEqual(2);
                expect(sort[0]).toEqual('timestamp,asc');
                expect(sort[1]).toEqual('id');
            });
        });
    });
});
//# sourceMappingURL=audits.component.spec.js.map