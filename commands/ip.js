const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const green = botconfig.green;

module.exports.run = async (bot, message, args) => {

        let IPembed = new Discord.RichEmbed()
        .setColor(green)
        .setTitle("__StrongCraft IP:__")
        .setDescription(`**play.strongcraft.org**`)
        .setFooter(`Requested by | ${message.author.tag}`);
        message.delete().catch(O_o=>{})
        message.channel.send(IPembed);

}

module.exports.help = {
    name: "ip",
    aliases: [],
}