const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.member;
    const user = message.mentions.users.first() || message.author;
    let y;
    if (!message.mentions.users.first()) {
        y = "Your";
    }
    else {
        y = `${message.mentions.users.first()}'s`;
    };
    let uicon;
    if (!message.mentions.users.first()) {
        uicon = message.author.displayAvatarURL;
    }
    else {
        uicon = message.mentions.users.first().displayAvatarURL;
    };
    let userembed = new Discord.RichEmbed()
    .setDescription(`**__${y} avatar:__**`)
    .setColor("#8700ff")
    .setImage(uicon)
    .setFooter(`Requested by | ${message.author.tag}`);
    message.delete().catch(O_o=>{});
    message.channel.send(userembed);
}

module.exports.help = {
    name: "avatar",
    aliases: [],
}
