module.exports = async (bot, message) => {

//     const Discord = require("discord.js");

//     const logs = message.guild.channels.find('name', '🔐server-logs');
//     if (message.guild.me.hasPermission('MANAGE_GUILD') && !logs) {
//         await message.guild.createChannel('🔐server-logs', 'text');
//     }
//     if (!logs) {
//         return console.log('The logs channel does not exist and cannot be created')
//     }
//     let sicon = message.guild.iconURL
//     const entry = await message.guild.fetchAuditLogs({
//         type: 'MESSAGE_DELETE'
//     }).then(audit => audit.entries.first())
//     let user;
//     if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
//         user = entry.executor.username
//     } else {
//         user = message.author
//     }
//     let iconURL = user.avatarURL
//     let logMessageEmbed = new Discord.RichEmbed()
//     .setDescription("*Message logging of " + message.guild.name + "*")
//     .setColor("#ff1e52")
//     .setThumbnail(sicon)
//     .addField("**__Deleted Message :__** ", message)
//     .addField("**__Message By :__**", `${message.author} with ID: ${message.author.id}`)
//     .addField("**__Deleted In :__**", message.channel)
//     .setTimestamp()
//     .setFooter(message.author.tag, (iconURL));

//     logs.send(logMessageEmbed);

};
