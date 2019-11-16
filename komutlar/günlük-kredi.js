const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')


let cooldown = 8.64e+7
exports.run = async (client, message, args) => {
   let user = message.author
let sure = await db.fetch(`Hopps_${message.guild.id}`)
      
      if (sure !== null && cooldown - (Date.now() - sure) > 0) {
        let timeObj = ms(cooldown - (Date.now() - sure))
      message.channel.send(`Günlük! Kredini Zaten Aldın **${timeObj.hours} saat ${timeObj.minutes} dakika** beklemelisin!`)
      } else {
   let m = message
 let verildi = "'a 500 TL Kredi Verildi!"
  const al = new Discord.RichEmbed()
  .setColor("RANDOM")
 .setDescription(`${message.author.tag}${verildi}`)
 
  m.channel.send(al)
  db.add(`kredi-sistemi.mizybots_${user.id}`, 500)
  db.set(`Hopps_${message.guild.id}`, Date.now())
      }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'günlük-kredi',
  açıklama: 'izinsiz paylaşmayın piçler hehe xd',
  çalcanmı: 'çalarsan öperim seni! 👑CoderS Code Sharing👑'
};