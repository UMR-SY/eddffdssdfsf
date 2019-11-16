const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("MÜZİK KOMUTLARI:",`
m!çal:         Yazdığınız şarkıyı çalar.
m!kuyruk:      Şarkı kuyruğunu gösterir.
m!devam:       Duraklatılan şarkıya devam eder.
m!geç:         Çalan şarkıyı geçer.
m!dur:         Çalınan şarkıyı duraklatır.
m!çalan:       Mesajı yazdığınız anda hangi şarkının çaldığını gösterir.
m!duraklat:    Oynatılan şarkıyı duraklatır.
m!ses:         Oynatılan şarkının ses seviyesini ayarlar.



`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['müzik','music'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: '',
  usage: 'müzik'
};
