const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
    "YAZI-TURA: **__TURA__**",
    "YAZI-TURA: **__YAZI__**"
];

exports.run = function(client, message) {
    
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    
    if (cevap === "YAZI-TURA: **__YAZI__**") {
        
         const embedyazı = new Discord.RichEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("https://cdn.discordapp.com/attachments/535856082854084618/544505258278387722/bozuk-para-turk-liras-resmi.png")
        message.channel.send(embedyazı);
        
    } else if (cevap === "YAZI-TURA: **__TURA__**") {
        
        const embedtura = new Discord.RichEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("https://cdn.discordapp.com/attachments/535856082854084618/544505562201849896/1TL_reverse.png")
        message.channel.send(embedtura);
        
    }
        

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
}