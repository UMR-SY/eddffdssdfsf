const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Kullanıcı Komutları:",`

<a:tik:660744593263951894> | m!davet: Botun Davet Linkini Gösterir.  
<a:tik:660744593263951894> | m!avatar: Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.
<a:tik:660744593263951894> | m!steam: steamstore Olan her Sey gösterir = örnek: m!steam Csgo.
<a:tik:660744593263951894> | m!sunucubilgi: Sunucunun bilgilerini gönderir.
<a:tik:660744593263951894> | m!ping: bot pingini gösterir.
<a:tik:660744593263951894> | m!istatistik: Botun istatistik gösterir.
<a:tik:660744593263951894> | m!bilgi: Bot Bilgi Gösterir.
<a:tik:660744593263951894> | m!havadurumu: hava durumunu gösterir.
<a:tik:660744593263951894> | m!top10: Botun En İyi Sunucularını Gösterir (Yeni!)

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
