"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(id, numberOfComments, content, likes, dislikes, owner) {
        this.id = id;
        this.numberOfComments = numberOfComments;
        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
        this.owner = owner;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.model.js.map