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
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;