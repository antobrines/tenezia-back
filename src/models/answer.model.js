const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const answerSchema = mongoose.Schema({
  label: {
    type: types.String,
    required: true,
    unique: true,
  },
  isValid: {
    type: types.Boolean,
    required: true,
    defautl: false,
  },
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
