"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var shared_1 = require("app/shared");
var AccountDetailsService = /** @class */ (function () {
    function AccountDetailsService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/account-details';
    }
    AccountDetailsService.prototype.create = function (accountDetails) {
        return this.http.post(this.resourceUrl, accountDetails, { observe: 'response' });
    };
    AccountDetailsService.prototype.update = function (accountDetails) {
        return this.http.put(this.resourceUrl, accountDetails, { observe: 'response' });
    };
    AccountDetailsService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    AccountDetailsService.prototype.query = function (req) {
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    };
    AccountDetailsService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    AccountDetailsService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], AccountDetailsService);
    return AccountDetailsService;
}());
exports.AccountDetailsService = AccountDetailsService;
//# sourceMappingURL=account-details.service.js.map