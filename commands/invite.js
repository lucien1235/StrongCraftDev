const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let user = message.author
        let iconURL = user.avatarURL
        let InviteEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, (iconURL))
        .setColor("RANDOM")
        .addField("**StrongCraft Friends Discord:**", 'Click [here](https://discord.gg/P5DkysF) ')
        .addField("**Official StrongCraft Discord:**", 'Click [here](https://discord.gg/5s3FXqX) ')
        .setFooter(`Requested by | ${message.author.tag}`);
        message.delete();
        message.channel.send(InviteEmbed);

}

module.exports.help = {
    name: "invite",
    aliases: ["discordinvite","inv"],
}