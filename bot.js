const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const ytdl = require('ytdl-core');
const moment = require('moment');
const talkedRecently = new Set();
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setGame("| Voice OF Fakers | by Chips#7271",'https://twitch.tv/voiceoffakerss') 
  console.log("Bağlandım!")   
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "sosyalmedya") {
        const embed = new Discord.RichEmbed()

            .addField("Sosyal Medya Adreslerimiz",'.')

            .addField("Twitch", 'https://www.twitch.tv/voiceoffakerss')

            .addField("Youtube", 'https://www.youtube.com/channel/UCJsS5GOTirshUpwtHZ0T0uA')

            .addField("Instagram", 'https://www.instagram.com/voiceoffakerss/?hl=tr')
            
            .setColor("RANDOM")
        
        return message.channel.sendEmbed(embed)
    }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "10kasımasdfasdfasdfgfsd") {
	    message.delete();
        const embed = new Discord.RichEmbed()

            .addField("10 Kasım",'| 1881 - 1938 |')

            .addField(".", 'Gidiyor Ata’m, gidiyor еllеr üstündе, yürüyor kalbimizin еn dеrininе, ağlıyorkеn bizlеr yеdidеn yеtmişе, söz vеriyoruz Ata’m izindеn gitmеyе. Şimdi sеnsizliğе üzülmеnin zamanı, şimdi fikirlеrini daha iyi anlamalı, kurduğun cumhuriyеtin dеğеrini bilip, hеr zaman еn yüksеğе, ilеriyе taşımalı.')
	
	    .setImage(url="http://i.sabah.com.tr/sb/galeri/turkiye/10-kasim-ile-ilgili-en-guzel-siirler-kisa-ve-uzun/20.jpg")
            
            .setColor('0xff0000')
        
        return message.channel.sendEmbed(embed)
    }
});

client.on('message', msg => {
  if (msg.content === 'Sea') {
    msg.reply('Aleyküm Selam Hoşgeldin Huzur Voice OF Fakersda !');
  msg.react('🇦')
  .then
  msg.react('🇸')
  }
});

client.on('message', msg => {
  if (msg.content === 'sea') {
    msg.reply('Aleyküm Selam Hoşgeldin Huzur Voice OF Fakersda !');
	msg.react('🇦')
	.then
	msg.react('🇸')
  }
});

client.on('message', msg => {
  if (msg.content === 'SA') {
    msg.reply('Aleyküm Selam Hoşgeldin Huzur Voice OF Fakersda !');
	msg.react('🇦')
	.then
	msg.react('🇸')
  }
});

client.on('message', msg => {
  if (msg.content === 'sA') {
    msg.reply('Aleyküm Selam Hoşgeldin Huzur Voice OF Fakersda !');
	msg.react('🇦')
	.then
	msg.react('🇸')
  }
});



client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam Hoşgeldin Huzur Voice OF Fakersda !');
	msg.react('🇦')
	.then
	msg.react('🇸')
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin Huzur Voice OF Fakersda !');
	msg.react('🇦')
	.then
	msg.react('🇸')
  }
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  if (message.author.id === ayarlar.deniz) permlvl = 5;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.login(process.env.BOT_TOKEN);
