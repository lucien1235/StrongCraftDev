const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message) => {

  if (!message.member.hasPermission('MANAGE_MESSAGES')) return errors.noPerms(message, "MANAGE_MESSAGES");
  let request = `Requested By ${message.author.username}`;
  message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
    msg.react('✅')
      .then(() => msg.react('❎'))
      .then(() => msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, {
      time: 12000
    });
    let reaction2 = msg.createReactionCollector(reaction2Filter, {
      time: 12000
    });
    reaction1.on("collect", r => {
      message.channel.send(`Chat messages will delete...`)
      var msg;
      msg = parseInt();

      message.channel.fetchMessages({
        limit: msg
      }).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.send("", {
        embed: {
          title: "**All messages have been deleted** :white_check_mark:",
          color: 0x06DF00,
          footer: {

          }
        }
      }).then(msg => {
        msg.delete(3000)
      });

    })
    reaction2.on("collect", r => {
      message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
      msg.delete();
    })
  })

}

module.exports.help = {
  name: "clear",
  aliases: ["clean", "purge"],
}
