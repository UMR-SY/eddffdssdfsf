const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "🟢 | HTML"); // JS Rolünün Tam Isminin Yazin
  if (message.member.roles.has(656537155941826611)) return message.channel.send("⛔ Zaten bu role sahipsin ")
  message.member.addRole(role);
  message.channel.send(`✅ HTML Rolü Başarıyla Verildi NOT: JavaScript 2 Adlı Rolü Almak İçin 1 İnvite Yapman Lazım Yaptıktan Sonra Otomatik Olarak Verilecektir! `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};

exports.help = {
  name: 'html',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: ''
};