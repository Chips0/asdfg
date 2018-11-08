const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "bu nasıl bir soru?",
    "imkansız"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Geçerli bir soru belirtmelisiniz. **Doğru Kullanım**: !botasor <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'botasor', 
  description: 'Bota sorulan sorulara yanıt verir',
  usage: 'botasor <soru>'
};
