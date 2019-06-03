const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

message.delete();

let status = args.join(' ')
if(message.author.id !== "315577349192286228") return message.channel.send("You do not have permission!");

if(!args[0]) {
    bot.user.setActivity("");
    return message.channel.send("The game status will be removed.").then(msg => {msg.delete(8000)});;
}

bot.user.setActivity(status)

    const setGameEmbed = new Discord.RichEmbed()
        .setColor('#68f442')
        .setTitle("***Change of game status:***")
        .setDescription(status)

    message.channel.send(setGameEmbed).then(msg => {msg.delete(8000)});;
}

module.exports.help = {
    name: "setactivity",
    aliases: ["setgame", "gameset"],
}
