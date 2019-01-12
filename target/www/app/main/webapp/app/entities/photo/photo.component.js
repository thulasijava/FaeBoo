"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var photo_service_1 = require("./photo.service");
var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(photoService, jhiAlertService, eventManager, principal) {
        this.photoService = photoService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    PhotoComponent.prototype.loadAll = function () {
        var _this = this;
        this.photoService.query().subscribe(function (res) {
            _this.photos = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    PhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInPhotos();
    };
    PhotoComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    PhotoComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    PhotoComponent.prototype.registerChangeInPhotos = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('photoListModification', function (response) { return _this.loadAll(); });
    };
    PhotoComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    PhotoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-photo',
            templateUrl: './photo.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [photo_service_1.PhotoService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;
//# sourceMappingURL=photo.component.js.map