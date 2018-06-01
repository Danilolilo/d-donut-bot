const Discord = require('discord.js');
const client = new Discord.Client();
const dbl = require("dblposter");
const DBLPoster = new dbl(process.env.DBLTOKEN, client);

client.on('ready', () => {
  var counter = 0;
for(var k = 0; k < client.guilds.size; k+=1){
        counter = counter +  client.guilds.map(x=> x.memberCount)[k];
}
  console.log(`Ready... I'm in ${client.guilds.size} guilds with ${counter} users`);
	// Then, depending on what you called your client 
  DBLPoster.bind(null, client);
});

client.on('guildMemberAdd', member => {
  if(member.guild.id != 403227603663716353) return;
  const channel = member.guild.channels.find('name', 'about-you---sobre-voce');
  channel.send(`:flag_um: | ${member} please, inform us your language to see the channels... You can also ping the @Administrator role if no one wanna answer you...
:flag_br: | ${member} porfavor, nos informe sua língua para poder ver os chats... Você pode mencionar o cargo @Administrator se ninguém te responder...`);
  channel.send(`:flag_um: English US/UK || :flag_br: Portuguese BR/PT
You can also choose both :thumbsup:`);
})

client.on('guildMemberAdd', member => {
  if(member.guild.id == 290165338128121858) return;
  if(member.guild.id == 403227603663716353) return;
  const channel = member.guild.channels.find('name', 'general', 'bate-papo', 'audit-log', 'maud-log', 'new-members', 'bot-zone', 'chatgeral');
  if (!channel) return;
  channel.send(`There's one more member in this server! **${member.user.username}** is one of us now :smile:`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'new-members');
  if (!channel) return;
  channel.send(`There's one more member in this server! **${member}** is one of us now :smile:`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'new-members');
  if (!channel) return;
  channel.send(`O-oh, **${member}** have jumped out of this server...`);
});

client.on('guildMemberRemove', member => {
  if(member.guild.id == 290165338128121858) return;
  if(member.guild.id == 403227603663716353) return;
  const channel = member.guild.channels.find('name', 'general',  'bate-papo', 'audit-log', 'maud-log', 'new-members', 'bot-zone', 'chatgeral');
  if (!channel) return;
  channel.send(`O-oh, **${member.user.username}** have jumped out of this server...`);
});

client.on('message', message => {
    var prefix = 'd-';
    var msg_backup = message.content;
    var msg = msg_backup.toLowerCase();
    var args = message.content.substring(prefix.length).split(" ");
    var command = args[0].toLowerCase();
    const bot = new Discord.Client();
    const fs = require('fs')

client.user.setPresence({ game: { name: 'Type "d-help" for help!', type: 0 } });

bot.on("ready", function() {
    bot.user.setGame("Use d-help")
    console.log("Booted up!")
});

if (message.author.bot) return;

  if (msg.startsWith(prefix)) {
    var commandUsed = message.createdAt.toString().split(' ');
    var serv = client.guilds.find('name', 'Minhas Coisas');
    var logC = serv.channels.find('name', 'd-donut-logs');
    logC.send(`${message.author} usou o comando **${args[0]}** no servidor **${message.guild.name}** as ${commandUsed[4]}

  Comando inteiro: \`${message}\``);
  }
	
  if (!message.guild) return message.author.send(":x: Sorry but I don't answer DM messages!");





if (msg.startsWith(prefix + "ping")) {
        message.channel.send("Pinging...").then(sentMsg => {
        sentMsg.edit(`:ping_pong: Pong! I took just \`${sentMsg.createdTimestamp - message.createdTimestamp}ms\` :smile:`);
});
}


if(msg.startsWith(prefix + "guilds")){
  if(message.author.id != 343479135055642625) return;
  message.reply(`hi again, i'm on ${client.guilds.size} guilds now!`);
}

if(msg.startsWith(prefix + "g.names")){
  if(message.author.id != 343479135055642625) return;
  message.reply(`${client.guilds.map(rp => rp.name).join(" -- ")}`);
}

if(msg.startsWith(prefix + "users")){
  if(message.author.id != 343479135055642625) return;
  var counter = 0;
for(var k = 0; k < client.guilds.size; k+=1){
        counter = counter +  client.guilds.map(x=> x.memberCount)[k];
}
  message.reply(`I'm with ${counter} users now...`)
}

if(msg.startsWith(prefix + 'uptime')){
  if(message.author.id != 343479135055642625) return;
  const moment = require("moment");
  const momentDurationFormatSetup = require("moment-duration-format");
  var processUptime = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  message.reply(`${processUptime}`);
}



if(msg.startsWith(prefix + "meme")){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');	
  var list = ["http://i0.kym-cdn.com/photos/images/newsfeed/001/217/729/f9a.jpg", // Primeiro iremos criar uma lista com todas as nossas fan arts da Shantae
	"https://cdn.stackward.com/wp-content/uploads/2016/09/sarcastic-meme-5.jpg",
	"https://i.pinimg.com/736x/94/ab/4f/94ab4f2e19f96539dbf400238a9a48d0--youth-groups-dankest-memes.jpg",
	"http://i0.kym-cdn.com/entries/icons/facebook/000/011/220/24219235.jpg",
	"http://i0.kym-cdn.com/photos/images/newsfeed/000/534/147/e8a.jpg",
	"https://www.dailydot.com/wp-content/uploads/4ae/3d/4bda6bf0c723e360.png",
	"https://img.memecdn.com/dat-bank-account-tho_o_5977337.jpg",
	"http://i0.kym-cdn.com/photos/images/original/001/227/872/a34.png",
	"http://i0.kym-cdn.com/photos/images/original/001/070/910/b52.png",
	"https://pbs.twimg.com/media/CnCRMIIXYAAqFjB.jpg",
	"http://pumpkeen.com/wp-content/uploads/2017/05/anbWYGV_460s.jpg",
	"http://cdn.sportige.com/wp-content/uploads/2017/04/Cowboys-Taco-Trump-1024x920.jpg",
  "https://images-cdn.9gag.com/photo/awn3p1W_700b_v1.jpg"]

   var listtext = ["Maybe it will make you laugh:",
   "I had some laughs with this one:",
   "What about this?:",
   "I wanna jump from a building now:",
   "Look this one I found:",
   "I guess this is the best:",
   "Who made it must have a poop brain:",
   "Even my grandmother would make this:"]

var randtext = listtext [Math.floor(Math.random() * listtext.length)];
var rand = list[Math.floor(Math.random() * list.length)]; // Pegamos uma imagem aleatória da lista...


embed = {
    color: 0xFF8DFD,
    title: ``,
    author: {
    name: '',
    icon_url: ''
  },
    description: `**${message.author}, ${randtext}**`,
    image: { url: rand }
};
message.channel.send({ embed });
}





if(msg.startsWith(prefix + 'poll')) {
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
   var Option = args.slice(2).join(' ');
   if(!Option) return message.reply('please, follow this example: **d-poll (time[m, h, d]) (question)**')
   var agree = "✅";
   var disagree = "❎";
   var messageCreated = message.createdAt.toString().split(' ');


   var timeT = args.slice(1).join(' ');
   var time = 0;
   if(!timeT) return message.channel.send(`please, specify a time!`);
   var timeType = args[1][args[1].length-1];
   if (timeType == "m"){
     time = parseInt(timeT.substr(0, args[1].length-1));
   }
   if (timeType == "h"){
     time = parseInt(timeT.substr(0, args[1].length-1))*60;
   }
   if (timeType == "d"){
     time = parseInt(timeT.substr(0, args[1].length-1))*60*24;
   }
   if (time > 60*24*2){
     return message.reply('time limit is just 2 days...');
   }
         if (time <=0) return message.reply('no time specified...');

         embed = {
             color: 0xFF8DFD,
             title: ``,
             description: (`${message.author} asked: **${Option}**

      **Let's vote with:**
      ✅   for \`yes\`     --     ❎   for \`no\``),
      }

         message.channel.send('', {embed}).then(sentMsg => {
         sentMsg.react(agree);
         sentMsg.react(disagree);


   setTimeout(function(){
     embed = {
         color: 0xFF8DFD,
         title: ``,
         description: (`${message.author} asked: **${Option}**

**POLL CLOSED!!**

✅ ${sentMsg.reactions.get(agree).count} positive votes.
❎ ${sentMsg.reactions.get(disagree).count} negative votes.`),
  }
     message.reply(`this is the result of your poll of ${args[1]} ago:`, {embed});
   }, time*60*1000);
});
 }

//`${reactions.get(agree).count-1}\`

if((msg.startsWith(prefix + 'urbandictionary')) || (msg.startsWith(prefix + 'ud'))){
const ud = require('urban-dictionary')
   if(!args[1]){
     ud.random(function (error, entry) {
  if (error) {
    message.channel.send(error.message)
  } else {
     message.channel.send(`**${entry.word}:**`)
     message.channel.send(`**Definition:**
${entry.definition}`)
    message.channel.send(`**Examples:**
${entry.example}`)
  }
})}else if(args[1] != null){
  var definition = args.slice(1).join(' ');
 
ud.term(definition, function (error, entries, tags, sounds) {
  if (error) {
    message.channel.send(error.message)
  } else {
    message.channel.send(`**${entries[0].word}:**`)
    message.channel.send(`**Definition:**
${entries[0].definition}`)
    message.channel.send(`**Example:**
${entries[0].example}`)
  }
})
}
}

if(msg.startsWith(prefix + '8ball')){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var list = ["yes", "no", "maybe", "of course", "I don't know", "Ask me later", "Maybe you can try to see", "Maybe your mother knows the answer", "Of course not", "Don't even try", "Can you ask again?"]
  var question = args.slice(1).join(' ');
  if(!question) return message.reply('Please, follow this: **d-8ball (question)**');

  var rand = list[Math.floor(Math.random() * list.length)]; // Pegamos uma imagem aleatória da lista...

  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter('', '')
  .setImage()
  .setThumbnail('https://blog.miniclip.com/app/uploads/2015/08/Tournament_Ach.png')
  .setTimestamp()
  .setURL('')
  .addField(`8ball
`, `

**Your question:  **` + question +

`
**My answer:  **`  +  rand, true)

  message.reply('**The "8ball" game :smile:**', { embed });
}

if(msg.startsWith(prefix + 'stats')){
  const moment = require("moment");
  const momentDurationFormatSetup = require("moment-duration-format");
  var processUptime = moment.duration(client.uptime).format(" D [d], H [h], m [m], s [s]");
  var counter = 0;
for(var k = 0; k < client.guilds.size; k+=1){
        counter = counter +  client.guilds.map(x=> x.memberCount)[k];
}

  if(message.channel.permissionsFor(message.client.user).has('ATTACH_FILES') == false){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply("sorry but I cannot send Embed Links or Attach Files in this channel... check my permissions and try again!");

  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter(client.user.username, client.user.avatarURL)
  .setImage()
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setURL('')
  .addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(`Client Uptime`, `${processUptime}`, true)
  .addField(`Users`, `${counter}`, true)
  .addField(`Guilds`, `${client.guilds.size}`, true)
  .addField(`Channels`, `${client.channels.size}`, true)
  .addField(`Help me to be in more servers!`, `type 'd-invite' to have my invite link!`, true)
  .addField(`Node`, `${process.version}`, true)

message.channel.send({ embed });
  } else {
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(500, 220)
  , ctx = canvas.getContext('2d');
 
const fs = require('fs');

let img = new Image;
img.src = fs.readFileSync('./perfil2.png');

ctx.fillStyle = `#ff69b4`;
ctx.fillRect(0, 0, 500, 220); 

ctx.drawImage(img, 350, 45, 150, 150);

ctx.fillStyle = `#ffffff`;
ctx.fillRect(240, 195, 250 ,25); 
ctx.fillStyle = `#ffb6c1`;
ctx.fillRect(250, 195, 250 ,25); 
ctx.fillStyle = `#ffb6c1`;
ctx.fillRect(0, 0, 500, 35); 

ctx.font = '30px Arial';
ctx.rotate();
ctx.fillStyle = `#000000`;
ctx.fillText("D-Donut stats:", 145, 30);

ctx.font = '20px Impact';
ctx.rotate();
ctx.fillStyle = `#000000`;
ctx.fillText(`∙ Memory Usage - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, 10, 60);
ctx.fillText(`∙ Client Uptime - ${processUptime}`, 10, 90);
ctx.fillText(`∙ Users - ${counter}`, 10, 120);
ctx.fillText(`∙ Guilds - ${client.guilds.size}`, 10, 150);
ctx.fillText(`∙ Channels - ${client.channels.size}`, 10, 180);
ctx.fillText(`∙ Node - ${process.version}`, 10, 210);
ctx.fillText("Ready for everything!", 265, 215);

message.channel.send('', { files: [{ attachment: canvas.toBuffer(), }] })
  }
}

if(msg.startsWith(prefix + 'info')) {
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var member = message.mentions.users.first();
  if(!member) return message.reply('Please, follow this: **d-info (@user)**')
  avatarURL = message.client.users.get(member.id).avatarURL;
  var _nickname = message.guild.members.get(member.id).nickname;
         if (_nickname == null){
           _nickname = message.guild.members.get(member.id).user.username;
         }
  var userCreated = member.createdAt.toString().split(' ');
  var userJoined = message.guild.joinedAt.toString().split(' ');
  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter(member.username, avatarURL)
  .setImage()
  .setThumbnail(avatarURL)
  .setTimestamp()
  .setURL('')
  .addField(`Username`, `${member.tag}`, true)
  .addField(`User ID`, `${member.id}`, true)
  .addField(`Account Created`, `${userCreated[1]} ${userCreated[2]} ${userCreated[3]}`, true)
  .addField(`Joined At`, `${userJoined[1]} ${userJoined[2]} ${userJoined[3]}`, true)
  .addField(`Is A Bot?`, `${member.bot}`, true)
  .addField(`Nickname`, `${_nickname}`)

  message.channel.send({embed});
};

if(msg.startsWith(prefix + "channel")){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var kakchannel = args.slice(1).join(' ');
  if(!kakchannel) return message.reply('please, specify a channel to get info...');

  var achannel = message.guild.channels.find('name', kakchannel);
  if(!achannel) return message.reply("i didn't find no channel with tha name! Try again later :thumbsdown:");

  var channelCreated = achannel.createdAt.toString().split(' ');
  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter('', '')
  .setImage()
  .setThumbnail('http://cdn.onlinewebfonts.com/svg/img_323299.png')
  .setTimestamp()
  .setURL('')
  .addField(`Channel Name`, `${achannel.name}`, true)
  .addField(`Channel ID`, `${achannel.id}`, true)
  .addField(`Channel Position`, `${achannel.position}`, true)
  .addField(`Channel Members`, `${achannel.members.size} have acess`, true)
  .addField(`Channel Type`, `${achannel.type}`, true)
  .addField(`Channel Topic`, `${achannel.topic}`, true)
  .addField(`Channel Created At`, `${channelCreated[1]} ${channelCreated[2]} ${channelCreated[3]}`)

  message.channel.send({embed})
}

if(msg.startsWith(prefix + 'role')){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var kakrole = args.slice(1).join(' ');
  if(!kakrole) return message.reply('please, specify a role to get info...');

  var role = message.guild.roles.find("name", kakrole);
  if(!role) return message.reply("i didn't find no role with that name! Try again later :thumbsdown:");

  var roleCreated = role.createdAt.toString().split(' ');
  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter('', '')
  .setImage()
  .setThumbnail('https://png.icons8.com/metro/540/edit-user-male.png')
  .setTimestamp()
  .setURL('')
  .addField(`Role name`, `${role.name}`, true)
  .addField(`Role Id`, `${role.id}`, true)
  .addField(`Role Position`, `${role.position}`, true)
  .addField(`Members`, `${role.members.size} with this role`, true)
  .addField(`Mentionable`, `${role.mentionable}`, true)
  .addField(`Role Color`, `${role.hexColor}`, true)
  .addField(`Created At`, `${roleCreated[1]} ${roleCreated[2]} ${roleCreated[3]}`)

  message.channel.send({embed});
}

if(msg.startsWith(prefix + 'server')) {
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var membersOnline = message.guild.members.filter(x => (x.user.presence.status) === "online" || "idle" || "do not disturb").size
  var serverCreated = message.guild.createdAt.toString().split(' ');
  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter(message.guild.name, message.guild.iconURL)
  .setImage()
  .setThumbnail(message.guild.iconURL)
  .setTimestamp()
  .setURL('')
  .addField(`Server Name`, `${message.guild.name}`, true)
  .addField(`Server ID`, `${message.guild.id}`, true)
  .addField(`Members`, `${message.guild.memberCount}`, true)
  .addField(`Created At`, `${serverCreated[1]} ${serverCreated[2]} ${serverCreated[3]}`, true)
  .addField(`Roles`, `${message.guild.roles.size}`, true)
  .addField(`Channels`, `${message.guild.channels.size}`, true)
  .addField(`Server Owner`, `@${message.guild.owner.user.tag}`, true)
  .addField(`members online`, `${membersOnline}`)
  .addField(`Server Region`, `${message.guild.region}`, true)


  message.channel.send({embed});
};

if(msg.startsWith(prefix + "r.list")){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter('', '')
  .setImage()
  .setThumbnail(message.guild.iconURL)
  .setTimestamp()
  .setURL('')
  .addField(`Roles List`, `Here's server roles: 

${message.guild.roles.map(rp => rp.name).join(', ')}`, true)
}


if (msg.startsWith(prefix + 'chance')) {
	  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var question = args.slice(1).join(' ');
  if(!question) return message.reply('Please, follow this: **d-chance (question)**');
  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', '' )
  .setColor(0xFF8DFD)
  .setDescription(``)
  .setFooter('', '')
  .setImage()
  .setThumbnail('https://images.vexels.com/media/users/3/143555/isolated/preview/af8dbc9112fe8ee9328539534b5a6548-ponto-de-interroga--o-3d-vermelho-e-amarelo-by-vexels.png')
  .setTimestamp()
  .setURL('')
  .addField(`The Chance Game
`, `

**Your question:  **` + (msg_backup.substr(prefix.length +7, msg.length-prefix.length-7)) +

`
**My answer:  **`  +  Math.floor(Math.random() * 100 ) + `% of chance...`, true)

  message.reply('**The "Chance" game :smile:**', { embed });
 };

if(msg.startsWith(prefix + "welcomekk")){
  if(message.author.id != 343479135055642625) return;
  var pt = message.guild.roles.find('name', 'Portuguese');
  var en = message.guild.roles.find('name', 'English');
  var ptEmoji = ('🇧🇷');
  var enEmoji = ('🇱🇷');
  message.channel.send(`:flag_um: | Hello there, wellcome to <@394929326245543937> server :tada:
:flag_br: | Olá, seja bem-vindo ao servidor do <@394929326245543937> :tada:

:flag_um: | Here you can talk about D-Donut, report bugs and make new friends :speaking_head:
:flag_br: | Aqui você pode conversar sobre o D-Donut, reportar erros, e fazer novos amigos :speaking_head:

:flag_um: | So... What is your native language? **US english/UK english?** :interrobang:
:flag_br: | Então, qual é a sua lingua de origem? **PT brasil/PT portugual?** :interrobang:

:flag_um: | You can also choose both! :thumbsup:
:flag_br: | Você também pode escolher as duas! :thumbsup:

:flag_um: | You need now to react to this message with your flag to see the channels of your language... :flag_um:
:flag_br: | Agora você precisa reagir a esta mensagem com sua bandeira para ver os chats da sua língua... :flag_br:

:flag_um: | **Enjoy the server** :smile:
:flag_br: | **Curta o server** :smile:`).then(sentMsg => {
sentMsg.react(ptEmoji);
sentMsg.react(enEmoji);


if(reaction.users.has(user.id)) {
  user.addRole(pt);
};
})

}
//  reaction.users.addRole(pt);

//  reaction.users.addRole(en);

 if(msg.startsWith(prefix + 'ship')) {
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
   var member = message.mentions.users.first();
   if(!member) return message.reply('Please, follow this: **d-ship (@user)**')
   avatarURL = message.client.users.get(member.id).avatarURL;
   sender = message.author;
   avatarsenderURL = message.client.users.get(sender.id).avatarURL;
   const embed = new Discord.RichEmbed()
   .setTitle("")
   .setAuthor( client.user.username, avatarURL )
   .setColor(0xFF8DFD)
   .setDescription(``)
   .setFooter('', '')
   .setImage(avatarURL)
   .setThumbnail(avatarsenderURL)
   .setTimestamp()
   .setURL('')
   .addField(`Let's see this!`, `**:heart: You and ${member} have ` + Math.floor(Math.random() * 100 ) + `% of chance :heart:**`, true)
   message.channel.send('Someone is in love? OMG :open_mouth: :open_hands: ', {embed});

};

if(msg.startsWith(prefix + 'warn'))  {
  if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply("Haha, nice try but you don't have permission :smile:");
  var warnmember = message.mentions.users.first();
  if (!warnmember) return message.reply("Hey, can you try again but now trying to specify a user to warn? thanks :thumbsup:")
  var warnreason = args.slice(2).join(' ');
  if (!warnreason) return message.reply(`Sorry, but I need a reason do make it...`);
  warnmember.send(`You were warned in ${message.guild.name} because of: **${warnreason}**`);
  message.channel.send('Warn sent!! :ok_hand:');
};


if(msg.startsWith(prefix + 'newnick')){
  if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply("Haha, nice try but you don't have 'Manage Nicknames' permission :smile:");
  var nickmember = message.mentions.users.first();
  if (!nickmember) return message.reply("Hey, can you try again but now trying to specify a user to change the nickname? thanks :thumbsup:")
  var newnick = args.slice(2).join(' ');
  if (!newnick) return message.reply(`Sorry, but I need a new nick to change...`)
  message.guild.members.get(nickmember.id).setNickname(newnick).then(member =>
    message.channel.send(`**${member.user.username}** have a new nickname :thumbsup:`).catch(console.error))
};



if (msg.startsWith(prefix + 'kick')) {
   if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply("Haha, nice try but you don't have 'Kick Members' permission :smile:");
   var kickmember = message.mentions.members.first();
   if (!kickmember) return message.reply("Hey, can you try again but now trying to specify a user to kick? thanks :thumbsup:")
   kickmember.kick().then(member =>
    message.channel.send(`**${member.user.username}** was succesfully kicked :thumbsup:`).catch(console.error))
}

if(msg.startsWith(prefix + 'ban')) {
    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply("Haha, nice try but you don't have 'Ban Members' permission :smile:");

    var banmember = message.mentions.members.first();
    if(!banmember) return message.reply("Hey, can you try again but now trying to specify a user to ban? thanks :thumbsup:");
    if(!banmember.bannable) return message.reply(":x: I cannot ban this user! Maybe you can try again later...");

    banmember.ban().then(member =>
    message.channel.send(`**${member.user.username}** was successfully banned :thumbsup:`));
  }

if(msg.startsWith(prefix + 'unban')){
  if(!message.channel.permissionsFor(message.client.user).has('MANAGE_ROLES')) return message.reply("Haha, nice try but you don't have 'Mute Members' permission :smile:");
	
  var banmember = args[1];
  if(!banmember) return message.reply("Hey, can you try again but now trying to specify a user to mute? thanks :thumbsup:");
  if(message.author.id == banmember.id) return message.reply("You cannot unban yourself :rolling_eyes:");
	
  mutemember.unban().then(member =>
  message.channel.send(`**${banmember.user.username}** was successfully unbanned :thumbsup:`));
}



if(msg.startsWith(prefix + 'mute')){
  if(!message.member.permissions.has("MUTE_MEMBERS")) return message.reply("Haha, nice try but you don't have 'Mute Members' permission :smile:");

  var mutemember = message.mentions.members.first();
  if(!mutemember) return message.reply("Hey, can you try again but now trying to specify a user to mute? thanks :thumbsup:");
  if(message.author.id == mutemember.id) return message.reply("You cannot mute yourself :rolling_eyes:");
  if(mutemember.permissions.has('ADMINISTRATOR')) return message.reply("o-oh, I can't mute a Mod/Admin...");

  var timeT = args.slice(2).join(' ');
  var time = 0;
  if(!timeT) return message.channel.send(`please, specify a time after specifing user... like \`d-mute @D-Donut#9529 1m\``);
  var timeType = args[2][args[2].length-1];
  if (timeType == "m"){
    time = parseInt(timeT.substr(0, args[2].length-1));
  }
  if (timeType == "h"){
    time = parseInt(timeT.substr(0, args[2].length-1))*60;
  }
  if (timeType == "d"){
    time = parseInt(timeT.substr(0, args[2].length-1))*60*24;
  }
  if (time > 60*24*7){
    return message.reply('mute time limit is just 7 days :thumbsdown:');
  }
        if (time <=0) return message.reply('no time specified...');

  var mutedRole = message.guild.roles.find("name", "Muted");
  if(!mutedRole) return message.reply('sorry, but you need to create a role named "Muted" and change its permissions "Send Messages" and "Add Reactions" in all channels to make it work')

  if(mutemember.roles.has(mutedRole.id)) return message.reply("Ummm, I think this user is already muted!");


  mutemember.addRole(mutedRole);
  message.channel.send(`${mutemember} is now muted for ${timeT}!`);

  setTimeout(function(){
    if (mutemember.roles.find("name", "Muted")){
      mutemember.removeRole(mutedRole.id);
    message.channel.send(`${mutemember} is now able to speak...`);
    }
  }, time*60*1000);
}

if(msg.startsWith(prefix + "unmute")){
  if(!message.member.permissions.has('MUTE_MEMBERS')) return message.reply("Haha, nice try but you don't have 'Mute Members' permission :smile:");
  var unmutemember = message.mentions.members.first();
  if(!unmutemember) return message.reply("Hey, can you try again but now trying to specify a user to unmute? thanks :thumbsup:");

  var mutedRole = message.guild.roles.find("name", "Muted");
  if(!unmutemember.roles.has(mutedRole.id)) return message.reply("Ummm, I think this user isn't muted!");

  unmutemember.removeRole(mutedRole);
  message.reply("This user is now able to speak!");

}

if(msg.startsWith(prefix + "addrole")){
  if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Haha, nice try but you don't have 'Manage Roles' permission :smile:");
  var rolemember = message.mentions.members.first();
  if(!rolemember) return message.reply("hey, can you try again but now trying to specify a user to add a role? thanks :thumbsup:");

  var role = args.slice(2).join(' ');
  if(!role) return message.reply("please, specify a role to add...");

  var newrole = message.guild.roles.find("name", role);
  if(!newrole) return message.reply("i didn't find no role with that name! Try again later :thumbsdown:");

  if(rolemember.roles.has(newrole.id)) return message.reply("this user already have this role!");

  rolemember.addRole(newrole);
  message.channel.send(`${rolemember} have now the **${role}** role :thumbsup:`);
}

if(msg.startsWith(prefix + "removerole")){
  if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Haha, nice try but you don't have 'Manage Roles' permission :smile:");
  var rolemember = message.mentions.members.first();
  if(!rolemember) return message.reply("hey, can you try again but now trying to specify a user to remove a role? thanks :thumbsup:");

  var role = args.slice(2).join(' ');
  if(!role) return message.reply("please, specify a role to remove...");

  var removerole = message.guild.roles.find("name", role);
  if(!removerole) return message.reply("i didn't find no role with that name! Try again later :thumbsdown:");

  if(!rolemember.roles.has(removerole.id)) return message.reply("this user doesn't have this role!");

  rolemember.removeRole(removerole);
  message.channel.send(`**${role}** was removed from ${rolemember} :thumbsup:`);
}

if(msg.startsWith(prefix + "test")){
  if(message.guild.id != 290165338128121858) return;
  message.channel.send("test is done!")
}

//message.guild.iconURL

if(msg.startsWith(prefix + "icon")){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var avatarURL = message.guild.iconURL
  embed = {
      color: 0xFF8DFD,
      title: `${message.guild.name} icon`,
      description: `[Click here!](${avatarURL})`,
      image: { url: avatarURL }
  };
  message.channel.send('', { embed });
}

if (msg.startsWith(prefix + "avatar")){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
          let user, avatarURL, embed, sender;
          sender = message.author;
               user = message.mentions.users.first();
               if (user == null || msg === prefix + "avatar"){
                 user = sender;
                 avatarURL = message.client.users.get(sender.id).avatarURL;
                 embed = {
                     color: 0xFF8DFD,
                     title: `${user.username}#${user.discriminator}`,
                     description: `[Click here!](${avatarURL})`,
                     image: { url: avatarURL }
                 };
                 message.channel.send('', { embed });
               }
               else{
                 avatarURL = message.client.users.get(user.id).avatarURL;
                 embed = {
                     color: 0xFF8DFD,
                     title: `${user.username}#${user.discriminator}`,
                     description: `[Click here!](${avatarURL})`,
                     image: { url: avatarURL }
                 };
                 message.channel.send('', { embed });
               }
             }



             if (msg.startsWith(prefix + "website")) {
		  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
               var link = ("http://d-donut-discord-bot.webnode.com/")
               embed = {
                   color: 0xFF8DFD,
                   title: `${client.user.username}`,
                   author: {
                   name: client.user.username,
                   icon_url: client.user.avatarURL
                 },
                   description: `my website! just [Click here!](${link})!`,
                   image: { url: 'https://4vector.com/i/free-vector-internet-icon_101765_Internet_Icon.png' }
               };
               message.channel.send('**enjoy me** :smile:', { embed });
             }


if(msg.startsWith(prefix + "group")){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var serverLink = ('https://discord.gg/C5qzAB2')
  embed = {
      color: 0xFF8DFD,
      title: `${client.user.username}`,
      author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
      description: `Come talk to my friends! just [Click here!](${serverLink})!`,
      image: { url: 'https://www.dds.com.br/blog/wp-content/uploads/2014/02/atendimento-via-chat-online.png' }
  };
  message.channel.send('Sent you my server link in your DM! :thumbsup:');
  message.author.send({embed});
}


if (msg.startsWith(prefix + "invite")) {
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var link = ("https://discordapp.com/api/oauth2/authorize?client_id=394929326245543937&permissions=2080763094&scope=bot")
  embed = {
      color: 0xFF8DFD,
      title: `${client.user.username}`,
      author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
      description: `Invite me to your server! just [Click here!](${link})!`,
      image: { url: 'http://www.allpvastore.com/wp-content/uploads/2015/09/friends-icon.png' }
  };
  message.channel.send('**enjoy me** :smile:', { embed });
}

if (msg.startsWith(prefix + "donut")) {
  embed = {
      color: 0xFF8DFD,
      title: ``,
      description: `

Hi! I'm **D-Donut**, I'm in your server to help you with moderation and fun!!!!

Please, type `+'`'+'d-help`'+` to see my commands :doughnut:
`,
  };
 message.reply('**did you say my name?**', { embed });
}

if(msg.startsWith(prefix + "goodbye"))  {
  if(message.author.id != 343479135055642625) return;
 message.reply(` I will never forget you...`)
 message.channel.send('No, I already have forgot you')
};



if(msg.startsWith(prefix + "prune")) {
if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply("Haha, nice try but you don't have 'Manage Messages' permission :smile:");
       var messagecount = args[1];
       if(!messagecount) return message.reply('please, specify an amout of messages to prune :rolling_eyes:')

    message.channel.bulkDelete(messagecount);

               message.channel.send(`:white_check_mark: Deleted \`${messagecount}\` messages from this channel.`)
                   .then(m => m.delete(5000));
}


   if (msg.startsWith(prefix + 'say ')){
       message.delete();
      message.channel.send(msg_backup.substr(prefix.length +4, msg.length-prefix.length-4));

}

if(msg.startsWith(prefix + "eval")){
                    var result, code, erro, ownerID = '343479135055642625';
                    if (message.author.id != ownerID) return message.reply("Unauthorized!");
                    code = message.content.substring((prefix + " eval").length, message.content.length);
                    if (!code.length) message.reply("No code provided!");
                    try {
                        result = eval(code);
                    } catch(error) {
                                result = erro;
                                erro = true;
                    } finally {
                                if (["boolean","number"].some(x => typeof result === x))
                                        result = result.toString();
                                if (typeof result === "object")
                                        result = JSON.stringify(result, null, 2);
                                if (!result) result = "No output";
                                if (erro === true) result = 'Compilation error!';
                                if (result === '{}'){
                                    result = "The script ran successfully!";
                                }


                                message.channel.send(`Wait...`).then(sentMsg => {
                                sentMsg.edit(`Done! I took just \`${sentMsg.createdTimestamp - message.createdTimestamp}ms\` :smile:
\`\`\`${result}\`\`\` `);

                    })}
}

if (msg.startsWith(prefix + "bug-report")){
	  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
             embed = {
                 color: 0xFF8DFD,
                 author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
                 title: `Do you wanna report bugs?`,
                 description:`
Please, If your wanna report bugs, just report it to my owner!

                                  `+'`'+'Roscão#1768`'+`

   Or, come to my server, you can report there too :smile:

                     https://discord.gg/C5qzAB2

                                    Enjoy Me! :smile:`,

                };
               message.channel.send('**To report bugs:**', { embed });
           }



if(msg.startsWith(prefix + "help")){
  const embed = new Discord.RichEmbed()
  .setTitle("")
  .setAuthor( '', client.user.avatarURL  )
  .setColor(0xFF8DFD)
  .setDescription(`
**D-Donut Commands:**
prefix = \`d-\`

:tools: **Moderation Commands** :tools:

1- **prune:** delete channel's messages.
2- **kick:** kick a user from your server.
3- **ban:** ban a user from your server.
4- **unban:** unban a user from your server.
5- **warn:** warn some user in DM.
6- **newnick:** edit user's nickname.
7- **addrole:** add user to role.
8- **removerole:** remove user from role.
9- **mute:** user will be unable to send messages.
10- **unmute:** user will be able to send messages.

:notepad_spiral: **Information Commands** :notepad_spiral:

1- **invite:** my invite.
2- **bug-report:** if you wanna report bugs.
3- **info:** get user information.
4- **server:** get server information.
5- **role:** get role information.
6- **channel:** get channel information.
7- **avatar:** get user avatar.
8- **icon:** get server icon.
9- **ping:** pong.
10- **website:** my website.
11-**group:** my server link.
12- **urbandictionary / ud:** search something in urban dictionary.
13- **stats:** D-Donut's stats.

:joy: **Funny Commands** :joy:

1- **say:** say what you want.
2- **chance:** what's the chance of something?
3- **ship:** see if you have chance with a user...
4- **8ball:** ask something for 8ball.
5- **meme:** show a random meme.
6- **poll:** make a poll.


**My Website:** https://d-donut-discord-bot.webnode.com/
**My Server:** https://discord.gg/C5qzAB2
**Upvote me:** https://discordbots.org/bot/394929326245543937

:doughnut: **ENJOY ME!** :doughnut:
`)
  .setFooter('', '')
  .setImage()
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setURL('')

  message.author.send({embed})
  message.channel.send(`Check your DM :smile:`)

}
});
client.login(process.env.TOKEN);
