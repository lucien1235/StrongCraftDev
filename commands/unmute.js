const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  // Unmute Command

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(args[0] == "help"){
    message.reply("Usage: /unmute <user>");
    return;
  }
  let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tounmute) return errors.cantfindUser(message.channel);

  let muterole = message.guild.roles.find(`name`, "Muted");

    let unmuteembed = new Discord.RichEmbed()
    .setDescription(`~UNMUTED~`)
    .setColor("#fc6400")
    .addField("Unmuted User: ", tounmute)
    .addField("Unmuted User ID:", tounmute.id)
    .addField("Time: ", message.createdAt)

    let warnchannel = message.guild.channels.find(`name`, "warn-log", "🔐server-logs")
    if(!warnchannel) return message.reply("Please create a warn-log channel first!")
    warnchannel.send(unmuteembed)

    await(tounmute.removeRole(muterole));
    message.delete().catch(O_o=>{});
    message.channel.send(`<@${tounmute.id}> has been unmuted!`);
    
//end of module
}

module.exports.help = {
    name: "unmute",
    aliases: [],
}
