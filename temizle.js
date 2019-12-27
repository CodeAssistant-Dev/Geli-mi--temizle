const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanabilmek için , ``Mesajları Yönet`` yetkisine sahip olmalısınız.");
  if(!args[0]) return message.channel.send(`${client.emojis.get("658091891744571425")} *Lütfen Silinicek Mesaj Miktarını Yazın.*`);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${client.emojis.get("658091892000686141")} **${args[0]}** *Adet mesaj başarıyla silindi!*`).then(msg => msg.delete(5000));
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','süpür'],
  permLevel: 2,
};

exports.help = {
  name:'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>',
  category: 'yetkili'
};

//Coders Code
