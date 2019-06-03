const Discord = require('discord.js');
const asciify = require('asciify');
const hastebin = require('hastebin-gen');

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.reply('Please provide something to convert.');

    asciify(args.join(" "), {
        font: 'binary'
    }, (err, res) => {

        if (res.length > 2000) return hastebin(res, "js").then(r => {
            message.channel.send("Too long, here's a hastebin link " + r)

        })
        message.channel.send("```" + res + "```")
    })

}

module.exports.help = {
    name: "binary",
    aliases: [""],
}