"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var request_util_1 = require("app/shared/util/request-util");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/users';
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.resourceUrl, user, { observe: 'response' });
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.resourceUrl, user, { observe: 'response' });
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    UserService.prototype.query = function (req) {
        var options = request_util_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login, { observe: 'response' });
    };
    UserService.prototype.authorities = function () {
        return this.http.get(app_constants_1.SERVER_API_URL + 'api/users/authorities');
    };
    UserService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map