const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const questionSchema = mongoose.Schema({
    label: {
        type: types.String,
        required: true,
        unique: true
    },
    type: {
        type: types.String,
        required: true,
        unique: true
    },
    isActive: {
        type: types.Boolean,
        required: true,
        default: true
    },
    position: {
        type: types.Number,
        required: true
    },
    idList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    },
    answers: {
        type: [Answer],
        required: true
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;