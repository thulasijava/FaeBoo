"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("app/shared");
var core_2 = require("app/core");
var admin_1 = require("app/admin");
var UserMgmtComponent = /** @class */ (function () {
    function UserMgmtComponent(userService, alertService, principal, parseLinks, activatedRoute, router, eventManager, modalService) {
        var _this = this;
        this.userService = userService;
        this.alertService = alertService;
        this.principal = principal;
        this.parseLinks = parseLinks;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.eventManager = eventManager;
        this.modalService = modalService;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    UserMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.registerChangeInUsers();
        });
    };
    UserMgmtComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    UserMgmtComponent.prototype.registerChangeInUsers = function () {
        var _this = this;
        this.eventManager.subscribe('userListModification', function (response) { return _this.loadAll(); });
    };
    UserMgmtComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userService.update(user).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.loadAll();
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    UserMgmtComponent.prototype.loadAll = function () {
        var _this = this;
        this.userService
            .query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        })
            .subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.body); });
    };
    UserMgmtComponent.prototype.trackIdentity = function (index, item) {
        return item.id;
    };
    UserMgmtComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    UserMgmtComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    UserMgmtComponent.prototype.transition = function () {
        this.router.navigate(['/admin/user-management'], {
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    UserMgmtComponent.prototype.deleteUser = function (user) {
        var modalRef = this.modalService.open(admin_1.UserMgmtDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    UserMgmtComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.users = data;
    };
    UserMgmtComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    UserMgmtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-user-mgmt',
            templateUrl: './user-management.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.UserService,
            ng_jhipster_1.JhiAlertService,
            core_2.Principal,
            ng_jhipster_1.JhiParseLinks,
            router_1.ActivatedRoute,
            router_1.Router,
            ng_jhipster_1.JhiEventManager,
            ng_bootstrap_1.NgbModal])
    ], UserMgmtComponent);
    return UserMgmtComponent;
}());
exports.UserMgmtComponent = UserMgmtComponent;
//# sourceMappingURL=user-management.component.js.map