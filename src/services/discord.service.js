const config = require('../config');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', ]
});

client.login(config.discord.clientBot);

const auth = async (code) => {
  const data_1 = new URLSearchParams();
  data_1.append('client_id', config.discord.clientId);
  data_1.append('client_secret', config.discord.clientSecret);
  data_1.append('grant_type', 'authorization_code');
  data_1.append('redirect_uri', 'http://localhost:3000/api/discord/auth');
  data_1.append('scope', 'identify');
  data_1.append('code', code);
  const request = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    body: data_1
  });
  const response = await request.json();
  return response;
};

const me = async (token) => {
  const request = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `${token}`
    }
  });
  const response = await request.json();
  return response;
};

const roles = async (id) => {
  const guild = await client.guilds.fetch(config.discord.guildId);
  const member = await guild.members.fetch(id);
  const roles = await member.roles.cache.map(role => role.name);
  return roles;
};



module.exports = {
  auth,
  me,
  roles
};