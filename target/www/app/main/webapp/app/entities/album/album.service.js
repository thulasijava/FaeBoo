"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var shared_1 = require("app/shared");
var AlbumService = /** @class */ (function () {
    function AlbumService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/albums';
    }
    AlbumService.prototype.create = function (album) {
        return this.http.post(this.resourceUrl, album, { observe: 'response' });
    };
    AlbumService.prototype.update = function (album) {
        return this.http.put(this.resourceUrl, album, { observe: 'response' });
    };
    AlbumService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    AlbumService.prototype.query = function (req) {
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    };
    AlbumService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    AlbumService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], AlbumService);
    return AlbumService;
}());
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map