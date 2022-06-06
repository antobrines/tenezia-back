const { Question } = require('../models');

const create = async (questionBody) => {
  return await Question.create(questionBody);
};

const changeActive = async (_id, value) => {
  return await Question.findByIdAndUpdate(_id, {
    isActive: value
  });
};

const getQuestionFromListId = async (idList) => {
  return await Question.find({
    idList: idList
  });
};

const update = async (_id, questionBody) => {
  return await Question.findByIdAndUpdate(_id, questionBody);
};

const addAnswer = async (_id, answerId) => {
  return await Question.findByIdAndUpdate(_id, {
    $push: {
      answers: answerId
    }
  });
};


module.exports = {
  create,
  changeActive,
  getQuestionFromListId,
  update,
  addAnswer
};