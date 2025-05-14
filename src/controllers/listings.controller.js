const listingsService = require("@/services/listings.service");
const { success } = require("../../utils/response");

const getList = async (req, res) => {
  const listings = await listingsService.getAll();
  success(res, 200, listings);
};

const getOne = async (req, res) => {
  success(res, 200, req.listing);
};

const create = async (req, res) => {
  const newListing = await listingsService.create(req.body);
  success(res, 200, newListing);
};

const update = async (req, res) => {
  const listing = await listingsService.update(req.listing.id, req.body);
  success(res, 200, listing);
};

const remove = async (req, res) => {
  await listingsService.remove(req.listing.id);
  success(res, 200);
};

module.exports = {
  getList,
  getOne,
  create,
  update,
  remove,
};
