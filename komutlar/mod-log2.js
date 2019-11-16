const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
exports.run = async(client, message, params, args) => {
 let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Kayıt kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let logkanali = message.mentions.channels.first();
     if (!logkanali) return message.channel.send(':no_entry: Kayıt kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `' + prefix + 'logayarla #kanal`')
     db.set(`membermodChannel_${message.guild.id}`, message.mentions.channels.first().id).then(i => {
        message.channel.send(`:white_check_mark: Kayıt kanalı, <#${i}> olarak ayarlandı.`)    
    })         
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["logayarla","modlog","logkanalı"],
 permLevel: 0
};
exports.help = {
 name: 'mod-log2',
 description: 'Sunucuda mod-log kanalını ayarlamaya yardımda bulunur.',
 usage: 'kayıtkanalı'
};