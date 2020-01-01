const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("655019027256705033")) return message.channel.send(`Bu komutu kullanabilmek için \`'KAYIT EDECEK YETKİLİ ROLÜ İSMİ'\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first() 
  if (!kullanıcı) return message.channel.send('Kullanıcıyı Etkiketlemelisin!')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('661836806437994517')
  member.removeRole('')
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(`Kayıt işlemi başarılı`, `**Kayıt edilen kullanıcı :** ${kullanıcı} \n**Kayıt işleminde verilen rol :** \`VERİLECEK ROL İSİM\``)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'erkek',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}