const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:x:530639861208711169> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  

  let bkanal = message.mentions.channels.first()
 
  
  if (!bkanal) {
    message.channel.send(`<:x:530639861208711169> Başvuru kanalını etiketlemelisin.`)
  }
  
  if(args[0] === "sıfırla") {
    if(!args[0]) {
      message.channel.send(`<:x:530639861208711169> Ayarlanmayan Şeyi Sıfırlayamazsın.`)
      return
    }
    
    db.delete(`bkanal1_${message.guild.id}`)
    message.channel.send(`<:white_check_mark:530639616945029140> Başvuru Kanalı Başarıyla Sıfırlandı.`)
    return
  }
  
  
  db.set(`bkanal1_${message.guild.id}` ,bkanal.name)
  
    message.channel.send(`<:white_check_mark:530639616945029140> Başvuru kanalı \`${bkanal.name}\` olarak ayarlandı.`)
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['başvuru-kanal'],
    permLevel: 3
}

exports.help = {
    name: 'başvuru-kanal-ayarla',
    description: 'Yetki Başvurularının Gönderileceği Kanalı Ayarlar.',
    usage: 'başvuru-kanal-ayarla <#kanal>'
}