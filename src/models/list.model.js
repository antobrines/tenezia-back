const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const listSchema = mongoose.Schema({
    label: {
        type: types.String,
        required: true,
        unique: true
    },
    explications: {
        type: types.String,
        required: false,
        default: ''
    },
});

const List = mongoose.model('List', listSchema);
module.exports = List;