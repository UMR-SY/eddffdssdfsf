const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("655019027256705033")) return message.channel.send(`Bu komutu kullanabilmek için \`'💙 | Discord Yetkili'\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı Etiketlemelisin!')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('661836926982029318')
  let embed = new Discord.RichEmbed()
  .setColor('yellow')
  .addField(`Kayıt işlemi başarılı`, `**Kayıt edilen kullanıcı :** ${kullanıcı} \n**Kayıt işleminde verilen rol :** \`👩 | Kadın\``)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 2
}

exports.help = {
  name: 'kadın',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}