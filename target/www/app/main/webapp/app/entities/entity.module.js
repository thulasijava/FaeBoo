"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var account_details_module_1 = require("./account-details/account-details.module");
var profile_module_1 = require("./profile/profile.module");
var friend_module_1 = require("./friend/friend.module");
var album_module_1 = require("./album/album.module");
var photo_module_1 = require("./photo/photo.module");
var video_module_1 = require("./video/video.module");
var post_module_1 = require("./post/post.module");
var comment_module_1 = require("./comment/comment.module");
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var FaeBooEntityModule = /** @class */ (function () {
    function FaeBooEntityModule() {
    }
    FaeBooEntityModule = tslib_1.__decorate([
        core_1.NgModule({
            // prettier-ignore
            imports: [
                account_details_module_1.FaeBooAccountDetailsModule,
                profile_module_1.FaeBooProfileModule,
                friend_module_1.FaeBooFriendModule,
                album_module_1.FaeBooAlbumModule,
                photo_module_1.FaeBooPhotoModule,
                video_module_1.FaeBooVideoModule,
                post_module_1.FaeBooPostModule,
                comment_module_1.FaeBooCommentModule,
            ],
            declarations: [],
            entryComponents: [],
            providers: [],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], FaeBooEntityModule);
    return FaeBooEntityModule;
}());
exports.FaeBooEntityModule = FaeBooEntityModule;
//# sourceMappingURL=entity.module.js.map