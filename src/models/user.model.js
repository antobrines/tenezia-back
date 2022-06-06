const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
  discordId: {
    type: types.String,
    required: true,
    unique: true
  },
  email: {
    type: types.String,
    required: true,
    unique: true
  },
  username: {
    type: types.String,
    required: true,
    unique: true
  },
  avatar: {
    type: types.String,
    required: false,
  },
  password: {
    type: types.String,
    required: false,
  },
  isValidated: {
    type: types.Boolean,
    required: true,
    default: false
  },
  age: {
    type: types.Number,
    required: false,
    default: 0
  },
  hoursPlayed: {
    type: types.Number,
    required: false,
    default: 0
  },
  lastServer: {
    type: types.String,
    required: false,
    default: ''
  },
  daysPlayed: {
    type: types.Array,
    required: false,
    default: []
  },
  knowServer: {
    type: types.Array,
    required: false,
    default: []
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;