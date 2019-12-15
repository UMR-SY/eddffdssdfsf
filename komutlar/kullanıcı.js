const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Kullanıcı Komutları:",`
m!davet: Botun Davet Linkini Gösterir.  
m!basvuru : başvuru isim soyisim yaş meslek kaç saat aktif .
m!avatar: Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.
m!steamstore: steamstore Olan her Sey gösterir = örnek: m!steamstore Csgo.
m!sunucubilgi: Sunucunun bilgilerini gönderir.
m!şikayet: Bot için şikayet bildirirsiniz.
m!sunucutanıt: Sunuzunuzu Tanıtabilirsiniz.
m!radyo: radyo açarsınız.
m!ping: pinginizi gösterir.
m!oylama: Bulunduğunuz kanala oylama yapar.
m!istatistik: Botun istatistik gösterir.
m!bilgi: Bot Bilgi Gösterir.
m!playstore: playstore daki tüm oyunlar ve vb şeyleri gösterir.= örnek:playstore mobil pugb
m!tavsiye: Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar.
m!havadurumu: hava durumunu gösterir.

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
