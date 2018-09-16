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
      message.reply("Kullanım: !uyar <kullanıcı> <Sebep>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("UYARI VERME")
    .setColor(0x3899e7)
    .addField("Uyarı Verilen Kullanıcı", `${rUser} ID: ${rUser.id}`)
    .addField("Yetkili", `${message.author} ID: ${message.author.id}`)
    .addField("Sebep", rreason)

    let reportschannel = message.guild.channels.find(`name`, "⚒mod-log");
    if(!reportschannel) return message.channel.send(" `⚒mod-log` İsminde Yazı Kanalı Bulamıyorum.!");
    reportschannel.send(reportEmbed);
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 2
};

exports.help = {
 name: 'uyar',
 description: 'İstediğiniz Kişiyi Uyarın.',
 usage: 'uyar'
};
