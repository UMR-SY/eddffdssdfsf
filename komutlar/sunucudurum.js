client.user.setActivity(``, { type: "PLAYING" });
  let embed = new Discord.RichEmbed()
    .setTitle("**HyperX Durum**")
    .setDescription(
      `**Bot aktif!** \n Botu açılış itibariyle şuan; **${
        client.guilds.size
      }** sunucu\n**${client.guilds
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString() + ``}** kullanıcı kullanıyor!`
    )
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setColor("40bcdb")
    .setFooter(`${client.user.username} `, client.user.avatarURL);
  client.channels.get("KANAL İD GİR").send(embed); 
});