const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const purple = botconfig.purple;

module.exports.run = async (client, message, args, tools) => {
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
       prefixes[message.guild.id] = {
           prefixes: botconfig.prefix
       };
    }
    
    let prefix = prefixes[message.guild.id].prefixes;

    if(!message.member.hasPermission("SEND_TTS_MESSAGES")) return errors.noPerms(message, "SEND_TTS_MESSAGES");

    if (!args[0]) return message.channel.send(`*Usage:* ***` + prefix + `poll question***`).then(msg => {msg.delete(3000)});;

    const pollEmbed = new Discord.RichEmbed()
    .setColor(purple)
    .setFooter("React to vote.")
    .setDescription(args.join(' '))
    .setTitle(`Poll Created By ${message.author.username}`);

    let pollchannel = message.guild.channels.find(`name`, "📍polls");
    if (!pollchannel) return message.channel.send("Couldn't find poll channel.").then(msg => {msg.delete(3000)});;

    message.delete().catch(O_o => {});
    let poll = await pollchannel.send(pollEmbed);

    await suggest.react('👍');
    await suggest.react('👎');

}

module.exports.help = {
  name: "poll",
  aliases: ["question"],
}
