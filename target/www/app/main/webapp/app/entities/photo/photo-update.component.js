"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var photo_service_1 = require("./photo.service");
var post_1 = require("app/entities/post");
var album_1 = require("app/entities/album");
var PhotoUpdateComponent = /** @class */ (function () {
    function PhotoUpdateComponent(jhiAlertService, photoService, postService, albumService, activatedRoute) {
        this.jhiAlertService = jhiAlertService;
        this.photoService = photoService;
        this.postService = postService;
        this.albumService = albumService;
        this.activatedRoute = activatedRoute;
    }
    PhotoUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.activatedRoute.data.subscribe(function (_a) {
            var photo = _a.photo;
            _this.photo = photo;
        });
        this.postService.query().subscribe(function (res) {
            _this.posts = res.body;
        }, function (res) { return _this.onError(res.message); });
        this.albumService.query().subscribe(function (res) {
            _this.albums = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    PhotoUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    PhotoUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.photo.id !== undefined) {
            this.subscribeToSaveResponse(this.photoService.update(this.photo));
        }
        else {
            this.subscribeToSaveResponse(this.photoService.create(this.photo));
        }
    };
    PhotoUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    PhotoUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    PhotoUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    PhotoUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    PhotoUpdateComponent.prototype.trackPostById = function (index, item) {
        return item.id;
    };
    PhotoUpdateComponent.prototype.trackAlbumById = function (index, item) {
        return item.id;
    };
    PhotoUpdateComponent.prototype.getSelected = function (selectedVals, option) {
        if (selectedVals) {
            for (var i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    };
    PhotoUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-photo-update',
            templateUrl: './photo-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService,
            photo_service_1.PhotoService,
            post_1.PostService,
            album_1.AlbumService,
            router_1.ActivatedRoute])
    ], PhotoUpdateComponent);
    return PhotoUpdateComponent;
}());
exports.PhotoUpdateComponent = PhotoUpdateComponent;
//# sourceMappingURL=photo-update.component.js.map