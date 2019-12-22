const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "456406598961856512") return message.channel.send("Bunun için iznin yok");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('> Yapımcım Lütfen Duyuru Mesajınızı Yazınız!');

  message.delete();


      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla  + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ** kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur'],
  permLevel: 4
};

exports.help = {
  name: 'botduyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru'
};