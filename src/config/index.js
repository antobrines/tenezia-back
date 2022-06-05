const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  db: {
    url: process.env.DB_URL
  },
  version: process.env.VERSION,
  environment: process.env.NODE_ENV,
  url: process.env.URL,
  token: {
    secret: process.env.TOKEN_SECRET,
    expire: process.env.TOKEN_EXPIRE
  },
  discord: {
    clientId: process.env.DISCORD_ID,
    clientSecret: process.env.DISCORD_SECRET,
    clientBot: process.env.DISCORD_BOT,
    guildId: process.env.DISCORD_GUILD
  }
};