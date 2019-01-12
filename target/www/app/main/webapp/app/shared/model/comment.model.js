"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = /** @class */ (function () {
    function Comment(id, content, likes, dislikes, commenter, post) {
        this.id = id;
        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
        this.commenter = commenter;
        this.post = post;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.model.js.map