"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profile = /** @class */ (function () {
    function Profile(id, bio, accessible, userProfile) {
        this.id = id;
        this.bio = bio;
        this.accessible = accessible;
        this.userProfile = userProfile;
        this.accessible = this.accessible || false;
    }
    return Profile;
}());
exports.Profile = Profile;
//# sourceMappingURL=profile.model.js.map