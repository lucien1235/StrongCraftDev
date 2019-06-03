const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":no_entry: You do not have the permission **MANAGE MESSAGES**!");
    if(args[0] == "help"){
        message.reply("Usage: <prefix>warnings <user>");
        return;
      }
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return errors.cantfindUser(message.channel);
    let warnlevel = warns[wUser.id].warns;

    let warnlevelembed = new Discord.RichEmbed()
    .setDescription("Warn History")
    .setColor("#fc6400")
    .addField(`User:`, `${wUser}`)
    .addField(`Total Warnings:`, `${warnlevel}`)

    message.delete().catch(O_o=>{});
    return message.channel.send(warnlevelembed);

}

module.exports.help = {
    name: "warnlevel",
    aliases: ["warnings", "history", "offe", "offenses"],
}
