const { answer } = require('../models');

const create = async (answerBody) => {
  return await answer.create(answerBody);
};

const update = async (_id, answerBody) => {
  return await answer.findByIdAndUpdate(_id, answerBody);
};

const remove = async (_id) => {
  return await answer.findByIdAndRemove(_id);
};

const changeValid = async (_id, value) => {
  return await answer.findByIdAndUpdate(_id, {
    isValid: value,
  });
};

const changePositon = async (_id, position) => {
  return await answer.findByIdAndUpdate(_id, {
    position: position,
  });
};

module.exports = {
  create,
  update,
  remove,
  changeValid,
  changePositon,
};
