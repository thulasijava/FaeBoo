"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(id, topFriend, user, friend) {
        this.id = id;
        this.topFriend = topFriend;
        this.user = user;
        this.friend = friend;
        this.topFriend = this.topFriend || false;
    }
    return Friend;
}());
exports.Friend = Friend;
//# sourceMappingURL=friend.model.js.map