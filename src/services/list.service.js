const { list } = require('../models');

const create = async (listBody) => {
  return await list.create(listBody);
};

const getOne = async (id) => {
  return await list.findById(id);
};

const updateOne = async (id, listBody) => {
  return await list.findByIdAndUpdate(id, listBody);
};

const getAll = async () => {
  return await list.find({});
};

module.exports = {
  create,
  getOne,
  updateOne,
  getAll
};
