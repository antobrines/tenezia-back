const { List } = require('../models');

const create = async (listBody) => {
  return await List.create(listBody);
};

const getOne = async (id) => {
  return await List.findById(id);
};

const updateOne = async (id, listBody) => {
  return await List.findByIdAndUpdate(id, listBody);
};

const getAll = async () => {
  return await List.find({});
};

const changePosition = async (id, position) => {
  await List.find({ position: position }).then(async (list) => {
    if (list.length > 1) {
      for (let i = 0; i < list.length; i++) {
        await List.findByIdAndUpdate(list[i]._id, {
          position: list[i].position + 1,
        });
      }
    }
  });
  return await List.findByIdAndUpdate(
    id,
    {
      position: position,
    },
    { new: true }
  );
};

module.exports = {
  create,
  getOne,
  updateOne,
  getAll,
  changePosition,
};
