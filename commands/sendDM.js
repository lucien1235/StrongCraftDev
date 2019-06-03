// Classes
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

// Modules
module.exports.run = async (bot, message, args) => {

    // Sends a DM message to a user.

    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permissions to use this command!").then(msg => {msg.delete(3000)});;
    if (!args[0]) return message.channel.send("Usage: **/send <@user> <message>**").then(msg => {msg.delete(3000)});;

    let sendDM = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!sendDM) return message.channel.send("Please mention a user.").then(msg => {msg.delete(3000)});;
    let DMbericht = args.join(" ").slice(20);
    if (!DMbericht) return message.channel.send("Please put a message.").then(msg => {msg.delete(3000)});;
    if (sendDM.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't send a DM message to that user!").then(msg => {msg.delete(3000)});;

    let user = message.author
    let iconURL = user.avatarURL

    let DMsendEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, (iconURL))
        .setColor("#417cdb")
        .addField("Message:", DMbericht)
        .addField("Message from:", user.username);

    sendDM.send(DMsendEmbed);
    message.channel.send(`:white_check_mark: Successfully sent a DM message to ${sendDM}!`);
}

module.exports.help = {
    name: "send",
    aliases: ["sendDM", "Send"],
}
