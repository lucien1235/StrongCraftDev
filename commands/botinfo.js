const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
       prefixes[message.guild.id] = {
           prefixes: botconfig.prefix
       };
    }
    
    let prefix = prefixes[message.guild.id].prefixes;
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("**__Bot Information__**")
        .setColor("#ff1500")
        .setThumbnail(bicon)
        .addField("**__Bot Name :__**", bot.user.username)
        .addField("**__Bot ID :__**", bot.user.id)
        .addField("**__Bot Prefix :__**", `" ` + prefix + ` "`)
        .addField("**__Connected to :__**", bot.guilds.size + " server(s).")
        .addField("**__Connected to :__**", bot.users.size + " user(s).")
        .addField("**__Connected to :__**", bot.channels.size + " channel(s).")
        .addField("**__Bot Ping :__**", bot.ping + "ms")
        .addField('**__Bot Invite :__**', '*Not available*')
        .addField('**__Bot Support :__**', '*Support Server of StrongCraft:* **Click [here](https://discord.gg/P5DkysF)**')
        .addField("**__Created On :__**", bot.user.createdAt);

        message.delete().catch(O_o=>{});
        return message.channel.send(botembed);
        
}

module.exports.help = {
    name: "botinfo",
    aliases: ["binfo"],
}
