"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var shared_1 = require("app/shared");
var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/photos';
    }
    PhotoService.prototype.create = function (photo) {
        return this.http.post(this.resourceUrl, photo, { observe: 'response' });
    };
    PhotoService.prototype.update = function (photo) {
        return this.http.put(this.resourceUrl, photo, { observe: 'response' });
    };
    PhotoService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    PhotoService.prototype.query = function (req) {
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    };
    PhotoService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    PhotoService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map