const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const red = ayarlar.red;
const green = ayarlar.green;
const orange = ayarlar.orange;
const errors = require("../hatalar/hata.js");
const talkedRecently = new Set();

exports.run = function(client, message, args) {
    message.delete();
    if(args[0] == "yardım"){
      message.reply("Kullanım: !bildir <kullanıcı> <Sebep>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Şikayet Bildirimi")
    .setColor("RANDOM")
    .addField("Reportlanan Kullanıcı", `${rUser} ID: ${rUser.id}`)
    .addField("Reportlayan Kullanıcı", `${message.author} ID: ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Zaman", message.createdAt)
    .addField("Sebep", rreason)

    let reportschannel = message.guild.channels.find(`name`, "sikayetler");
    if(!reportschannel) return message.channel.send(" `sikayetler` İsminde Yazı Kanalı Bulamıyorum.!");
    reportschannel.send(reportEmbed);
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'bildir',
 description: 'İstediğiniz Kişiyi Reportlarsınız.',
 usage: 'bildir'
};
