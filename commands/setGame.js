const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
    let args = message.content.split(" ").slice(1);
let status = args.join(' ')
if(message.author.id !== "315577349192286228") return message.channel.send("You do not have permission!");

message.delete();
bot.user.setActivity(status)


}

module.exports.help = {
    name: "setactivity",
    aliases: ["setgame", "gameset"],
}