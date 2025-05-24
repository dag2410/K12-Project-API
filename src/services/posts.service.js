const postsModel = require("@/models/posts.model");
class PostsService {
  async getAll() {
    const users = await postsModel.findAll();
    return users;
  }

  async getById(id) {
    const user = await postsModel.findById(id);
    return user;
  }

  async create(data) {
    const user = await postsModel.create(data);
    return user;
  }

  async update(id, data) {
    const user = await postsModel.update(id, data);
    return user;
  }

  async remove(id) {
    const user = await postsModel.remove(id);
    return user;
  }
  async getComments(postId) {
    const comments = await postsModel.findComments(postId);
    return comments;
  }
  async createPostComment(postId, data) {
    const comment = await postsModel.createPostComment(postId, data);
    return comment;
  }
}

module.exports = new PostsService();
