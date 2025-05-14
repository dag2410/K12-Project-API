const listingsModel = require("@/models/listings.model");
class listingsService {
  async getAll() {
    const listings = await listingsModel.findAll();
    return listings;
  }

  async getById(id) {
    const listing = await listingsModel.findById(id);
    return listing;
  }

  async create(data) {
    const listing = await listingsModel.create(data);
    return listing;
  }

  async update(id, data) {
    const listing = await listingsModel.update(id, data);
    return listing;
  }

  async remove(id) {
    const listing = await listingsModel.remove(id);
    return listing;
  }
}

module.exports = new listingsService();
