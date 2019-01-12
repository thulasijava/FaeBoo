"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spyobject_1 = require("./spyobject");
var ng_jhipster_1 = require("ng-jhipster");
var MockAlertService = /** @class */ (function (_super) {
    tslib_1.__extends(MockAlertService, _super);
    function MockAlertService() {
        return _super.call(this, ng_jhipster_1.JhiAlertService) || this;
    }
    MockAlertService.prototype.addAlert = function (alertOptions) {
        return alertOptions;
    };
    return MockAlertService;
}(spyobject_1.SpyObject));
exports.MockAlertService = MockAlertService;
//# sourceMappingURL=mock-alert.service.js.map