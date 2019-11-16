const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Eğlence  Komutları:",`
m!aşkölçer: Aşk Ölçmeni sağlar.
m!çaydemle: İstediğiniz kişiye çay demlersiniz.
m!bjk: bjk çerçeve yapar.  
m!gs: gs çerçeve yapar.
m!fb: fb çerçeve yapar.
m!ezhel: Rastgele Ezhel fotoğrafları atar.
m!köpek: Rastgele gif atar.
m!kahveiç: Kahve İçer.
m!kafasalla: Kafa sallarsınız.
m!kedi: Rastgele kedi gif atar.
m!duğumgünü: Arkadasini Bilir.
m!troll: Trollolololololool :D resmi atar.
m!yazıtura: Yazı-Tura atar.
m!öp: iştediniz kişiyi öpersiniz.
m!kafadansı: Bot kafa dansı yapar.
m!yala: yalar.
m!kaçcm: Acaba Kaç CM.
m!mcskin: Belirtilen oyuncunun kostümünü gösterir.
m!tekme-at: İstediğiniz Kişiye tekme Atarsınız.
m!boks-makinesi: Boks makinesine vurur.
m!nahçek: İstediğiniz Kişiye Çekiç Atarsınız.
m!gta: GTA Efekti verir.
m!sevimlibakış: Sevimli bakış atarsınız.
m!ateş-et: İstediğiniz kişinin kafasına sıkar.
m!kızlabakış: kızlabakışma Yaparsınız.
m!espri: Espiri yapar.
m!efkar-vs: Seçtiğiniz 2 kişiyi savaştırırsınız.
m!düello: İstediğiniz bir kişi ile düello atarsınız.
m!balıktut: Balık Tutarsın.
m!anime: Rastgele anime resmi atar.
m!adamasmaca: adam asmamaca fazili astim öldü.

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
