const Discord = require('discord.js');
const asciify = require('asciify');
const hastebin = require('hastebin-gen');

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply('Please provide something to convert.');

    asciify(args.join(" "), {
        font: 'morse'
    }, (err, res) => {
        message.channel.send("```" + res + "```")
    })
}
module.exports.help = {
    name: "morse",
    aliases: [""],
}