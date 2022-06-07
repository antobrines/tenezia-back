const { Question } = require('../models');

const create = async (questionBody) => {
  return await Question.create(questionBody);
};

const changeActive = async (_id, value) => {
  return await Question.findByIdAndUpdate(_id, {
    isActive: value
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

const changePosition = async (id, position) => {
  const questionUpdate = await Question.findById(id);
  if (questionUpdate.position > position) {
    position = position - 0.1;
  } else {
    position = position + 0.1;
  }
  questionUpdate.position = position;
  await questionUpdate.save();
  await Question.find({})
    .sort({ position: 1 })
    .exec((err, questions) => {
      if (err) throw err;
      questions.forEach((question, index) => {
        Question.findByIdAndUpdate(
          question._id,
          { position: index + 1 },
          (err) => {
            if (err) throw err;
          }
        );
      });
    });
};

module.exports = {
  create,
  changeActive,
  update,
  addAnswer,
  changePosition,
};