"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var shared_1 = require("app/shared");
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/profiles';
    }
    ProfileService.prototype.create = function (profile) {
        return this.http.post(this.resourceUrl, profile, { observe: 'response' });
    };
    ProfileService.prototype.update = function (profile) {
        return this.http.put(this.resourceUrl, profile, { observe: 'response' });
    };
    ProfileService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    ProfileService.prototype.query = function (req) {
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    };
    ProfileService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    ProfileService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map