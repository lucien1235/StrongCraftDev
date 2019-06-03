const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    message.delete();
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if (message.author.id !== "315577349192286228") return message.channel.send("You do not have permission!");

    if (!args[0]) return message.channel.send("Please provide a status!\nUsage: **/setStatus <status>**\n\n***Example:*** *DND, Offline, Online, Idle*").then(msg => {msg.delete(3000)});;

    const status = args
    if (status == "online") {
        bot.user.setStatus("online")
    }

    if (status == "idle") {
        bot.user.setStatus("idle")
    }

    if (status == "dnd") {
        bot.user.setStatus("dnd")
    }

    if (status == "offline") {
        bot.user.setStatus("invisible")
    }

    const StatusEmbed = new Discord.RichEmbed()
        .setColor('#68f442')
        .setTitle("***Change of status***")
        .setDescription(`Status: ${bot.user.presence.status}`)

    message.channel.send(StatusEmbed).then(msg => {msg.delete(8000)});;

}

exports.help = {
    name: "setStatus",
    aliases: ["statusset", "setstatus", "status"],
}
