const throwError = require("./throwError");

const models = {
  user: require("@/models/users.model"),
  post: require("@/models/posts.model"),
  comment: require("@/models/comments.model"),
  categories: require("@/models/categories.model"),
  listings: require("@/models/listings.model"),
};
function attachResourceLoader(router, params) {
  params.forEach((param) => {
    router.param(param, async (req, res, next, id) => {
      const resource = await models[param].findById(id);
      if (!resource) throwError(404, `${param} not found.`);
      req[param] = resource;
      next();
    });
  });
}

module.exports = attachResourceLoader;
