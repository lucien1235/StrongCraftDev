const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = `${Date.now() - message.createdTimestamp}`
    let api = `${Math.round(bot.ping)}`
    let pingEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor("RANDOM")
        .addField('**Time Taken :**', msg + " ms")
        .addField('**WebSocket :**', api + " ms")
        .setTimestamp(new Date())
        .setFooter(`Requested by ${message.author.username}`);

    message.delete().catch(O_o => {});
    return message.channel.send(pingEmbed);
}

module.exports.help = {
    name: "ping",
    aliases: ["pong", "dong", "ding"],
}
