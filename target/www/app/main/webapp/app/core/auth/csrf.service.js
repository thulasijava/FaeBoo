"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_cookie_1 = require("ngx-cookie");
var CSRFService = /** @class */ (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        if (name === void 0) { name = 'XSRF-TOKEN'; }
        return this.cookieService.get(name);
    };
    CSRFService = tslib_1.__decorate([
        core_1.Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [ngx_cookie_1.CookieService])
    ], CSRFService);
    return CSRFService;
}());
exports.CSRFService = CSRFService;
//# sourceMappingURL=csrf.service.js.map