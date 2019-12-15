const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
      
      let sebep = args.slice(0).join(" ");
      if (!sebep) return message.reply("AFK olma nedenini yazmalısın!");
      db.set(`afks_${message.author.id}`, sebep)
  
          const afk = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('AFK')
      .setDescription(`${message.author.username} │ Adlı Kullanıcı **${sebep}** Yüzünden Afk Oldu!`)
      .setFooter('Developed Eskimiş Senelere Gidiyor', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(afk);
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};