"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var shared_1 = require("app/shared");
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/comments';
    }
    CommentService.prototype.create = function (comment) {
        return this.http.post(this.resourceUrl, comment, { observe: 'response' });
    };
    CommentService.prototype.update = function (comment) {
        return this.http.put(this.resourceUrl, comment, { observe: 'response' });
    };
    CommentService.prototype.find = function (id) {
        return this.http.get(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    CommentService.prototype.query = function (req) {
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    };
    CommentService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    CommentService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map