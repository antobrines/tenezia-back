const { List, Question } = require('../models');

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
  // order by position
  return await List.find({}).sort({ position: 1 });
};

const changePosition = async (id, position) => {
  const listUpdate = await List.findById(id);
  if (listUpdate.position > position) {
    position = position - 0.1;
  } else {
    position = position + 0.1;
  }
  listUpdate.position = position;
  await listUpdate.save();
  await List.find({})
    .sort({ position: 1 })
    .exec((err, lists) => {
      if (err) throw err;
      lists.forEach((list, index) => {
        List.findByIdAndUpdate(list._id, { position: index + 1 }, (err) => {
          if (err) throw err;
        });
      });
    });
};

const getQuestionFromListId = async (idList) => {
  return await Question.find({
    idList: idList,
  });
};

module.exports = {
  create,
  getOne,
  updateOne,
  getAll,
  changePosition,
  getQuestionFromListId,
};
