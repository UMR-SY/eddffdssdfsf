const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
       .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
.setDescription(`:small_orange_diamond: | **${ayarlar.prefix}kasaaç**CSGO Kasa Açarsınız .\n :small_orange_diamond: | **${ayarlar.prefix}aşkölç** Belirttiğiniz Kişiye Aşkınızı Gösterir. \n :small_orange_diamond: |  **${ayarlar.prefix}düello** Belirttiğiniz Kişiyle Düello Atarsınız.\n :small_orange_diamond: | **${ayarlar.prefix}roblox (kullanıcı-adınız)** Roblox Profilinize Bakarsınız.\n :small_orange_diamond: | **${ayarlar.prefix}mcskin (minecraft-adınız)** Minecraft Profilinizi Görürsünüz.\n` + `:small_orange_diamond: \n`)        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=602024501710159882&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/aEUfsU9) **|** [Web Sitesi](https://topbots-tr.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
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