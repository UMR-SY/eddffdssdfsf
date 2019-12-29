const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`<a:tik:660744593263951894> | **${ayarlar.prefix}yetkili** Yetkili Komutları.\n <a:tik:660744593263951894> | **${ayarlar.prefix}kullanıcı** Kullanıcıya Komutları.\n <a:tik:660744593263951894> |  **${ayarlar.prefix}eğlence** Eğlence Komutları.\n <a:tik:660744593263951894> | **${ayarlar.prefix}oyun**  Oyun Komutları Gösterir.\n` + `<a:tik:660744593263951894> | **${ayarlar.prefix}seviyeyardım**  Seviyeyardım Komutları Gösterir.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=602024501710159882&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/aEUfsU9) **|** [Web Sitesi](https://topbots-tr.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("https://cdn.discordapp.com/attachments/607989228294635543/660757118395351040/max_baner.jpg")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};