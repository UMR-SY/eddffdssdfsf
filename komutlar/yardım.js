const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');



exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#FF0000')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription("!avatar | Avatarınıza Bakarsınız! \n !ban @kullanıcı | Belirttiğiniz Kişiyi Banlarsınız! \n !banner-yazı | Yazdığınız Yazıyı Banner Olarak Atar. \n !capslock-engelleme | Capslock Kullanımını Engeller. \n !duyuru-kanal-ayarla | Duyuru Kanalını Belirler. \n !duyuru | Belirtilen Duyuru Kanalında Duyuru Yapar! \n !girişçıkış | (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.) \n !güvenlik | Güvenlik Sistemi. \n !temizle [Mesaj Sayısı] | Belirtilen Miktarda Mesaj Temizler \n !yasaklar | Sunucudan Yasaklananlar Listesini Gösterir!  \n !yavaş-mod [Süre] | Belirtilen Süre Kadar Yavaş Mod Uygular! \n !yetkilerim | Yetkilerinizi Gösterir! \n !özel-hoşgeldin-ayarla [mesaj] | Sunucuya Giren Kişilere Özelden Hoşgeldin Mesajını Gönderir!  \n !özel-görüşürüz-ayarla [mesaj] | Sunucudan Çıkan Kişilere Özelden Belirtilen Yazıyı Gönderir! \n ")
        .setThumbnail(client.user.avatarURL)
        .addField("» Linkler`, `[Bot Davet Linki](BOT DAVET LİNKİ!) **|** [Destek Sunucusu](DESTEK SUNUCUSU) ")
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("https://cdn.discordapp.com/attachments/710753344154763264/745950722822111293/mb_yeni_logo.png")  
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