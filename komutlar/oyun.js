const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Oyun Komutları:",`
m!battlefield: Belirttiğiniz kişinin Battlefield istatistiklerini gösterir.
m!fortnite: Belirttiğiniz kişinin Fortnite istatistiklerini gösterir.
m!csgo: CSGO İstatistikleri Gösterir.
m!slots: slot oynarsınız.
m!csgo-kasa-açma: CS:GO kasa açma simülasyonu.
m!roblox: Roblox istatistik gösterir.

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyun',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'oyun'
};
