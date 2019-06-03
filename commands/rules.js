const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  let needrules = message.guild.channels.find(c => c.name === '🔐server-logs');
  let rchannel = message.guild.channels.find(c => c.name === '📝rules');
  if(!rchannel) return needrules.send(`**__ERROR:__** I can't find a channel named **📝rules** for the command "/rules"!`)
  let user = message.author
  let iconURL = user.avatarURL
  let RulesEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, (iconURL))
  .setColor("#00eded")
  .addField("**StrongCraft Rules:**", 'Click [here](https://www.strongcraft.org/forums/viewtopic.php?t=244)\n')
  .addField("**Discord Rules:**", `${rchannel}`)
  .setFooter(`Requested by | ${message.author.tag}`);

  message.delete();
  message.channel.send(RulesEmbed);

}

module.exports.help = {
    name: "rules",
    aliases: [],
}
