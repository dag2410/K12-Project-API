const categoriesModel = require("@/models/categories.model");

class CategoriesService {
  async getAll() {
    const categories = await categoriesModel.findAll();
    return categories;
  }

  async getById(id) {
    const categories = await categoriesModel.findById(id);
    return categories;
  }

  async create(data) {
    const categories = await categoriesModel.create(data);
    return categories;
  }

  async update(id, data) {
    const categories = await categoriesModel.update(id, data);
    return categories;
  }

  async remove(id) {
    const categories = await categoriesModel.remove(id);
    return categories;
  }
}
module.exports = new CategoriesService();
