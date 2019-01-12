"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var album_service_1 = require("./album.service");
var core_2 = require("app/core");
var AlbumUpdateComponent = /** @class */ (function () {
    function AlbumUpdateComponent(jhiAlertService, albumService, userService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.albumService = albumService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    AlbumUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var album = _a.album;
            _this.album = album;
        });
        this.userService.query().subscribe(function (res) {
            _this.users = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    AlbumUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    AlbumUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.album.id !== undefined) {
            this.subscribeToSaveResponse(this.albumService.update(this.album));
        }
        else {
            this.subscribeToSaveResponse(this.albumService.create(this.album));
        }
    };
    AlbumUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    AlbumUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    AlbumUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    AlbumUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    AlbumUpdateComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    AlbumUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-album-update',
            templateUrl: './album-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            album_service_1.AlbumService,
            core_2.UserService,
            router_1.ActivatedRoute])
    ], AlbumUpdateComponent);
    return AlbumUpdateComponent;
}());
exports.AlbumUpdateComponent = AlbumUpdateComponent;
//# sourceMappingURL=album-update.component.js.map