const {
  User
} = require('../models');
const bcrypt = require('bcryptjs');
const config = require('../config');
const jwt = require('jsonwebtoken');

const create = async (userBody) => {
  if (userBody.password)
    userBody.password = bcrypt.hashSync(userBody.password, 10);
  return User.create(userBody);
};

const findOneAndUpdate = async (email_user) => {
  const filter = {
    email: email_user
  };
  const update = {
    is_validate: true
  };
  await User.findOneAndUpdate(filter, update);
  let user = await User.findOne(filter);
  return user;
};

const login = async (req) => {
  const {
    username,
    password
  } = req.body;

  const user = await User.findOne({
    username: username
  });

  if (!user) {
    return 'Invalid Credentiel';
  }

  const accessToken = await jwt.sign({
    email: user.email,
    username: user.username,
    _id: user._id,
    discordId: user.discordId
  }, config.token.secret);

  const test = await compareAsync(password, user.password);
  if (test) {
    return accessToken;
  } else {
    return 'Invalid Credentiel';
  }
};

const findOneByEmail = async (email_user) => {
  return await User.findOne({
    email: email_user
  }, '-password');
};

const compareAsync = (param1, param2) => {
  return new Promise(function (resolve, reject) {
    bcrypt.compare(param1, param2, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
const test = [{
  "$facet": {
    "Total": [{
      "$count": "username"
    }, ],
    "banned": [{
      "$match": {
        "banned": {
          "$exists": true
        }
      }
    }, {
      "$count": "banned"
    }]
  }
}, {
  "$project": {
    "Total": "$Total.username",
    "Released": "banned.banned"
  }
}]
module.exports = {
  create,
  findOneAndUpdate,
  login,
  findOneByEmail
};