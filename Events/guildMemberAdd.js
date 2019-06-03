const Discord = require("discord.js");

module.exports = (bot, member) => {

    console.log(`${member} joined the server.`);

    let role = member.guild.roles.find("name", "Non-StrongCraft-Member");
    member.addRole(role).catch(console.error);
    let needrules = member.guild.channels.find(c => c.name === '🔐server-logs');
    let rchannel = member.guild.channels.find(c => c.name === '📝rules');
    if(!rchannel) return needrules.send(`**__ERROR:__** I can't find a channel named **rules** for the welcome message in DMs, please create one!`)
    let welcomeChannel = member.guild.channels.find(c => c.name === '👋welcome');
    welcomeChannel.send(`Welcome ${member} to **${member.guild.name}**!`);
    member.send(`Welcome ${member} to **${member.guild.name}**!\n\nDo not forgot to read our ${rchannel}.\nAnd have a great time here on **${member.guild.name}**!\n\n**Thanks** :smiley:\n`).catch(O_o=>{ welcomechannel.send(`This user does not have DMs enabled\n\nWelcome ${member} to **${member.guild.name}**!\n\nDo not forgot to read our ${rchannel}.\nAnd have a great time here on **${member.guild.name}**!\n\n**Thanks** :smiley:\n`)});


    var logChannel = member.guild.channels.find(c => c.name === '🔐server-logs');
    if (!logChannel) return;

    let newMember = new Discord.RichEmbed()
        .setTitle('**[ MEMBER LOGS ]**')
        .setThumbnail(member.user.avatarURL)
        .setColor('GREEN')
        .addField(`${member.user.tag} **joined the server.**`, `(Discord ID: **${member.user.id}**)`)
        .setTimestamp()
        .setFooter(member.user.tag, member.user.avatarURL)

    logChannel.send(newMember);

};