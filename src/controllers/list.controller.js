/* eslint-disable no-unused-vars */
const catchAsync = require('../utils/catchAsync');
const listService = require('../services/list.service');
const { errorF, successF } = require('../utils/message');
const httpStatus = require('http-status');

const create = catchAsync(async (req, res, next) => {
  const listCreated = await listService.create(req.body);
  successF('List Created', listCreated, httpStatus.CREATED, res, next);
});

const update = catchAsync(async (req, res, next) => {
  const listUpdated = await listService.update(req.params.id, req.body);
  successF('List Updated', listUpdated, httpStatus.OK, res, next);
});

const changePosition = catchAsync(async (req, res, next) => {
  const listUpdated = await listService.changePosition(
    req.params.id,
    req.body.position
  );
  successF('List position Updated', listUpdated, httpStatus.OK, res, next);
});

const getAll = catchAsync(async (req, res, next) => {
  const lists = await listService.getAll();
  successF('Lists', lists, httpStatus.OK, res, next);
});

const getQuestionFromListId = catchAsync(async (req, res, next) => {
  const questions = await listService.getQuestionFromListId(req.params.id);
  successF('Questions', questions, httpStatus.OK, res, next);
});

module.exports = {
  create,
  update,
  changePosition,
  getAll,
  getQuestionFromListId,
};
