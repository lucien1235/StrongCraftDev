const Discord = require("discord.js");

module.exports = (bot, member) => {

    console.log(`${member} left the server.`);

    let welcomeChannel = member.guild.channels.find(c => c.name === '👋welcome');
    welcomeChannel.send(`Goodbye ${member}! \nIt was a great time on **${member.guild.name}**!`);


      var logChannel = member.guild.channels.find(c => c.name === '🔐server-logs');
      if (!logChannel) return;

      let leaveMember = new Discord.RichEmbed()
          .setTitle('**[ MEMBER LOGS ]**')
          .setThumbnail(member.user.avatarURL)
          .setColor('RED')
          .addField(`${member.user.tag} **left the server.**`, `(Discord ID: **${member.user.id}**)`)
          .setTimestamp()
          .setFooter(member.user.tag, member.user.avatarURL)

      logChannel.send(leaveMember);

};