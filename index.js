// ! Modules
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true, restTimeOffset: 150 });

// ! Global Settings
const botconfig = require("./botconfig.json");
let cooldown = new Set();
let cdseconds = 5;

// ! Event Handler
fs.readdir(`./Events/`, (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(`.js`)) return;
        const evt = require(`./Events/${file}`);
        let evtName = file.split(`.`)[0];
        console.log(`${evtName}.js loaded`);
        bot.on(evtName, evt.bind(null, bot));
    });
});

// ! Command Handler
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) console.log(err);
  const jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    const props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach((alias) => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

// ! Global Settings - Command Handler
// ? Settings for the command handler: prefix, cooldown, toLowerCase.
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
       prefixes[message.guild.id] = {
           prefixes: botconfig.prefix
       };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply("You have to wait 5 seconds between commands.")
    }
    if(!message.member.hasPermission("ADMINISTRATOR")){
        cooldown.add(message.author.id);
    }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    const commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) commandfile.run(bot, message, args);

    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});

// ! AutoResponses
bot.on("message", async message => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
       prefixes[message.guild.id] = {
           prefixes: botconfig.prefix
       };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    if (message.content === '<@550837323441373195>') {
        message.channel.send(`Hey ${message.author} you can type **${prefix}help** for more information.`);
        }

    if (message.content === '<@550837323441373195> how do i use commands?') {
        message.channel.send(`You can type: **${prefix}help** for the commands list.`);
        }

    if (message.content === '<@550837323441373195> prefix') {
        message.channel.send(`Hey ${message.author}! My prefix is: "**${prefix}**"`);
        }

    if (message.content === 'prefix') {
        message.channel.send(`Hey ${message.author}! My prefix is: "**${prefix}**"`);
        }

    if (message.content.toLowerCase().startsWith ("rip")) {
        message.channel.send ("Pity, you're dead", {files : ["./images/rip.png"]})
    }
    
    if (message.content === 'Prefix') {
        message.channel.send(`Hey ${message.author}! My prefix is: "**${prefix}**"`);
        }
    })

bot.login(process.env.BOT_TOKEN);
