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
  client.user.setGame(client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + " Kullanıcı | Voice OF Fakers | by Chips#7271",'https://twitch.tv/voiceoffakers') 
  console.log("Bağlandım!")   
});


//Discord link paylaşım engelleme

client.on("message", (message) => {
  if (message.content.includes("çöp bot")) {
  message.delete()
  message.channel.sendMessage("Aynen kardeşim kesin öyledir inandım bak.")
  }
});

 client.on("message", (message) => {
  if (message.content.includes("https://discord.gg")) {
    message.delete()
    message.channel.sendMessage(message.author + " Bu kanalda discord linki paylaşamazsın!")
  }
});

 client.on("message", (message) => {
  if (message.content.includes("http://discord.gg")) {
    message.delete()
    message.channel.sendMessage(message.author + " Bu kanalda discord linki paylaşamazsın!")
  }
});

 client.on("message", (message) => {
  if (message.content.includes("discord.gg")) {
    message.delete()
    message.channel.sendMessage(message.author + " Bu kanalda discord linki paylaşamazsın!")
  }
});

client.on("message", (message) => {
  if (message.content.includes("!oylama")) {
  if (message.author.id === ayarlar.malaka) {
    message.delete()
    message.channel.sendMessage(message.author + " Kara listedesin. Lütfen tekrar deneyin ama komutu değil saygılı olmayı.")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!temizle")) {
  if (message.author.id === ayarlar.malaka) {
    message.delete()
    message.channel.sendMessage(message.author + " Kara listedesin. Lütfen tekrar deneyin ama komutu değil saygılı olmayı.")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!uyar")) {
  if (message.author.id === ayarlar.malaka) {
    message.delete()
    message.channel.sendMessage(message.author + " Kara listedesin. Lütfen tekrar deneyin ama komutu değil saygılı olmayı.")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!bildir")) {
  if (message.author.id === ayarlar.malaka) {
    message.delete()
    message.channel.sendMessage(message.author + " Kara listedesin. Lütfen tekrar deneyin ama komutu değil saygılı olmayı.")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!avatar")) {
  if (message.author.id === ayarlar.malaka) {
    message.delete()
    message.channel.sendMessage(message.author + " Çöp dediğin botu neden kullanmaya çalışıyorsun ?! Ayıp değil mi?")
  }
}});


client.on("message", (message) => {
  if (message.content.includes("!oylama")) {
  if (message.author.id === ayarlar.deniz) {
    message.delete()
    message.channel.sendMessage(message.author + " Çöp dediğin botu neden kullanmaya çalışıyorsun ?! Ayıp değil mi?")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!temizle")) {
  if (message.author.id === ayarlar.deniz) {
    message.delete()
    message.channel.sendMessage(message.author + " Çöp dediğin botu neden kullanmaya çalışıyorsun ?! Ayıp değil mi?")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!uyar")) {
  if (message.author.id === ayarlar.deniz) {
    message.delete()
    message.channel.sendMessage(message.author + " Çöp dediğin botu neden kullanmaya çalışıyorsun ?! Ayıp değil mi?")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!bildir")) {
  if (message.author.id === ayarlar.deniz) {
    message.delete()
    message.channel.sendMessage(message.author + " Çöp dediğin botu neden kullanmaya çalışıyorsun ?! Ayıp değil mi?")
  }
}});

client.on("message", (message) => {
  if (message.content.includes("!avatar")) {
  if (message.author.id === ayarlar.deniz) {
    message.delete()
    message.channel.sendMessage(message.author + " Çöp dediğin botu neden kullanmaya çalışıyorsun ?! Ayıp değil mi?")
  }
}});

//Küfür filtresi | küfür koruma
client.on("message", (message) => {
	if (message.content.includes("amk")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("sikerim")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("sikik")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("amına")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("anneni")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("sikeyim")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("aq")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("orospu çocuğu")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});

client.on("message", (message) => {
	if (message.content.includes("sikiyim")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
}
});


client.on("message", (message) => {
	if (message.content.includes("amcık")) {
		message.delete()
	message.channel.sendMessage(message.author + " Küfür etmemelisin!")
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

client.login(process.env.BOTUN_TOKEN);
