const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "✔ | JS"); // JS Rolünün Tam Isminin Yazin
  if (message.member.roles.has(662328769108901918)) return message.channel.send("⛔ Zaten bu role sahipsin ")
  message.member.addRole(role);
  message.channel.send(` JavaScript Rolü Başarıyla Verildi `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};