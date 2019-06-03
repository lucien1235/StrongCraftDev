const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    const member = message.mentions.members.first() || message.member;
    const user = message.mentions.users.first() || message.author;
    let y;
    if (!message.mentions.users.first()) {
        y = "you";
    }
    else {
        y = message.mentions.users.first();
    };
    let uicon;
    if (!message.mentions.users.first()) {
        uicon = message.author.displayAvatarURL;
    }
    else {
        uicon = message.mentions.users.first().displayAvatarURL;
    };
    let userembed = new Discord.RichEmbed()
    .setDescription(`**__Information about ${y}__**`)
    .setColor("RANDOM")
    .setThumbnail(uicon)
    .addField("Username:", user.tag, true)
    .addField("User ID:", user.id, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'N/A'}`, true)
    .addField("Muted :",member.mute ? 'Yes' : 'Not', true)
    .addField("Bot:", user.bot ? 'Yes' : 'Not', true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'N/A'}`, true)
    .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
    .addField("Joined:", message.member.joinedAt, true)
    .addField("Registered:", user.createdAt, true)
    .setFooter(`Requested by ${message.author.tag}`);

    message.delete().catch(O_o=>{});
    message.channel.send(userembed);
}

module.exports.help = {
    name: "userinfo",
    aliases: ["ui", "uinfo", "whois", "profile"],
}
