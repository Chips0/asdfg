const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0x3899e7));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatguufhib',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
