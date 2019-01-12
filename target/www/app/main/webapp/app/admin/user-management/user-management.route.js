"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var user_management_component_1 = require("./user-management.component");
var user_management_detail_component_1 = require("./user-management-detail.component");
var user_management_update_component_1 = require("./user-management-update.component");
var UserResolve = /** @class */ (function () {
    function UserResolve(principal) {
        this.principal = principal;
    }
    UserResolve.prototype.canActivate = function () {
        var _this = this;
        return this.principal.identity().then(function (account) { return _this.principal.hasAnyAuthority(['ROLE_ADMIN']); });
    };
    UserResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [core_2.Principal])
    ], UserResolve);
    return UserResolve;
}());
exports.UserResolve = UserResolve;
var UserMgmtResolve = /** @class */ (function () {
    function UserMgmtResolve(service) {
        this.service = service;
    }
    UserMgmtResolve.prototype.resolve = function (route, state) {
        var id = route.params['login'] ? route.params['login'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new core_2.User();
    };
    UserMgmtResolve = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [core_2.UserService])
    ], UserMgmtResolve);
    return UserMgmtResolve;
}());
exports.UserMgmtResolve = UserMgmtResolve;
exports.userMgmtRoute = [
    {
        path: 'user-management',
        component: user_management_component_1.UserMgmtComponent,
        resolve: {
            pagingParams: ng_jhipster_1.JhiResolvePagingParams
        },
        data: {
            pageTitle: 'userManagement.home.title',
            defaultSort: 'id,asc'
        }
    },
    {
        path: 'user-management/:login/view',
        component: user_management_detail_component_1.UserMgmtDetailComponent,
        resolve: {
            user: UserMgmtResolve
        },
        data: {
            pageTitle: 'userManagement.home.title'
        }
    },
    {
        path: 'user-management/new',
        component: user_management_update_component_1.UserMgmtUpdateComponent,
        resolve: {
            user: UserMgmtResolve
        }
    },
    {
        path: 'user-management/:login/edit',
        component: user_management_update_component_1.UserMgmtUpdateComponent,
        resolve: {
            user: UserMgmtResolve
        }
    }
];
//# sourceMappingURL=user-management.route.js.map