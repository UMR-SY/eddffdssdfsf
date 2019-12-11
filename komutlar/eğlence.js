const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Eğlence  Komutları:",`
m!aşkölç: Aşkınızı Ölçersiniz.
m!kafasalla: Kafa sallarsınız.
m!kedi: Rastgele kedi gif atar.
m!doğumgünü: Arkadasini Bilir.
m!yazıtura: Yazı-Tura atar.
m!öp: iştediniz kişiyi öpersiniz.
m!mcskin: Belirtilen oyuncunun kostümünü gösterir.
m!tekme-at: İstediğiniz Kişiye tekme Atarsınız.
m!nahçek: İstediğiniz Kişiye Çekiç Atarsınız.
m!düello: İstediğiniz bir kişi ile düello atarsınız.

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eğlence'
};
