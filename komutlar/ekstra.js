const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Ekstra  Komutları:",`
m!davet-sıralaması: Sunucunuza en çok kullanıcı getirenleri sıralar.
m!bunny: Yazınızı bunny yazısına dönüştürür.
m!üyedurum: Üye Durumlarını ve sunucudaki üye sayısını gösterir
m!türk: Türk bayrağı gönderir.


`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ekstra',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'ekstra'
};
