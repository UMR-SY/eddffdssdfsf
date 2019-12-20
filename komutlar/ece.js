const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setDescription(`Geh Kuçu Kuçu`)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: 'ece',
  description: 'Eceyi Çağırır',
  usage: 'ece'
};