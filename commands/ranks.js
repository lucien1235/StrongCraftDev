const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        message.channel.send(`**Official StrongCraft Store:**\nhttps://buy.strongcraft.org/\n\**Rank comparison:**\nhttps://buy.strongcraft.org/page/ranks/`);

}

module.exports.help = {
    name: "ranks",
    aliases: ["buy", "store", "perks", "donate"],
}
