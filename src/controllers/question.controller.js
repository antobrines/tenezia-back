/* eslint-disable no-unused-vars */
const catchAsync = require('../utils/catchAsync');
const questionService = require('../services/question.service');
const { errorF, successF } = require('../utils/message');
const httpStatus = require('http-status');

const create = catchAsync(async (req, res, next) => {
  const questionCreated = await questionService.create(req.body);
  successF('Question Created', questionCreated, httpStatus.CREATED, res, next);
});

const changePosition = catchAsync(async (req, res, next) => {
  const questionUpdated = await questionService.changePosition(
    req.params.id,
    req.body.position
  );
  successF(
    'Question position Updated',
    questionUpdated,
    httpStatus.OK,
    res,
    next
  );
});

const update = catchAsync(async (req, res, next) => {
  const questionUpdated = await questionService.update(req.params.id, req.body);
  successF('Question Updated', questionUpdated, httpStatus.OK, res, next);
});

const addAnswer = async (req, res, next) => {
  const questionUpdated = await questionService.addAnswer(
    req.params.id,
    req.body.answerId
  );
  successF('Answer added', questionUpdated, httpStatus.OK, res, next);
};

const changeActive = catchAsync(async (req, res, next) => {
  const questionUpdated = await questionService.changeActive(
    req.params.id,
    req.body.value
  );
  successF('Question Updated', questionUpdated, httpStatus.OK, res, next);
});

module.exports = {
  create,
  changePosition,
  update,
  addAnswer,
  changeActive,
};
