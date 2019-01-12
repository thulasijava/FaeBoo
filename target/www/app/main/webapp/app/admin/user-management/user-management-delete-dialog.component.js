"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var UserMgmtDeleteDialogComponent = /** @class */ (function () {
    function UserMgmtDeleteDialogComponent(userService, activeModal, eventManager) {
        this.userService = userService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    UserMgmtDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'userListModification',
                content: 'Deleted a user'
            });
            _this.activeModal.dismiss(true);
        });
    };
    UserMgmtDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-user-mgmt-delete-dialog',
            templateUrl: './user-management-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.UserService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
    ], UserMgmtDeleteDialogComponent);
    return UserMgmtDeleteDialogComponent;
}());
exports.UserMgmtDeleteDialogComponent = UserMgmtDeleteDialogComponent;
//# sourceMappingURL=user-management-delete-dialog.component.js.map