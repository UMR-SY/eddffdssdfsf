const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
    const embed = new Discord.RichEmbed()
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Kullanıcı Komutları:",`
m!davet: Botun Davet Linkini Gösterir.  
m!avatar: Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.
m!steam: steamstore Olan her Sey gösterir = örnek: m!steamstore Csgo.
m!sunucubilgi: Sunucunun bilgilerini gönderir.
m!ping: bot pingini gösterir.
m!istatistik: Botun istatistik gösterir.
m!bilgi: Bot Bilgi Gösterir.
m!havadurumu: hava durumunu gösterir.
m!top10: Botun En İyi Sunucularını Gösterir (Yeni!)

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kullanıcı'
};
