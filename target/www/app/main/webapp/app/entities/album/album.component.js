"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var album_service_1 = require("./album.service");
var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(albumService, jhiAlertService, eventManager, principal) {
        this.albumService = albumService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    AlbumComponent.prototype.loadAll = function () {
        var _this = this;
        this.albumService.query().subscribe(function (res) {
            _this.albums = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInAlbums();
    };
    AlbumComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    AlbumComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    AlbumComponent.prototype.registerChangeInAlbums = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('albumListModification', function (response) { return _this.loadAll(); });
    };
    AlbumComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    AlbumComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-album',
            templateUrl: './album.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [album_service_1.AlbumService,
            ng_jhipster_1.JhiAlertService,
            ng_jhipster_1.JhiEventManager,
            core_2.Principal])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map