const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;

module.exports.run = async (bot, message, args) => {
        let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
        let day = message.guild.createdAt.getDate()
        let month = 1 + message.guild.createdAt.getMonth()
        let year = message.guild.createdAt.getFullYear()
        let sicon = message.guild.iconURL
        let serverembed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, sicon)
        .setFooter(`Server Created On • ${day}.${month}.${year}`)
        .setColor(red)
        .setThumbnail(sicon)
        .addField("Guild ID :", message.guild.id, true)
        .addField("Guild Name :", message.guild.name, true)
        .addField("Guild Owner :", message.guild.owner.user.tag, true)
        .addField("Guild Region :", message.guild.region, true)
        .addField("Channel(s) :", message.guild.channels.size, true)
        .addField("Member Count :", message.guild.memberCount, true)
        .addField("Humans :", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
        .addField("Bot(s) :", message.guild.members.filter(m => m.user.bot).size, true)
        .addField("User(s) Online :", online.size, true)
        .addField("Role(s) Size :", message.guild.roles.size, true);

        message.delete().catch(O_o=>{});
        return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo",
    aliases: ["si", "sinfo"],
}
