const { RichEmbed } = require('discord.js');
const errors = require("../utils/errors.js");

module.exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    // If we can't find any role, then just default to the author's highest role
    if (!role) role = message.member.highestRole;

    let gicon = message.guild.iconURL
    // Define our embed
    const roleEmbed = new RichEmbed()
        .setColor(role.hexColor)
        .setThumbnail(gicon)
        .setTitle(`Role: **__${role.name}__**`)
        .addField('Members', role.members.size, true)
        .addField('Hex', role.hexColor, true)
        .addField('Creation Date', role.createdAt.toDateString(), true)
        .addField('Editable', role.editable.toString(), true)
        .addField('Managed', role.managed.toString(), true)
        .addField('ID', role.id, true)
        .setFooter(`Requested by ${message.author.tag}`);
    message.delete();
    return message.channel.send({
        embed: roleEmbed
    });
}

module.exports.help = {
    name: "roleinfo",
    aliases: ["ri", "rinfo"],
}
