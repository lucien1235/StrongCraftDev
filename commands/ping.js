const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {
        let msg = `${Date.now() - message.createdTimestamp}`
        let api = `${Math.round(bot.ping)}`
        let pingEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag,message.author.avatarURL)
        .setColor(green)
        .addField('**Time Taken :**',msg + " ms")
        .addField('**WebSocket :**',api + " ms")
        .setTimestamp(new Date())
        .setFooter(`Requested by ${message.author.tag}`);

        message.delete().catch(O_o=>{});
        return message.channel.send(pingEmbed).then(msg => {msg.delete(5000)});;

}

module.exports.help = {
    name: "ping",
    aliases: ["pong", "dong", "ding"],
}
