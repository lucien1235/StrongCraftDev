const { RichEmbed } = require("discord.js");
const ms = require('ms')

exports.run = async (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_TTS_MESSAGES')) return message.reply("You do not have that permission!");
    
    if(message.author.id !== "315577349192286228") return message.channel.send("The giveaway command is under development, it will be available soon!")
    let time = args[0];
    if(!args[0]) return message.channel.send("You must indicate a time, **Example: 10m (s = second, m = minute, h = hour, d = day)**.")
    if(isNaN(parseInt(args[0]))) return message.channel.send("Syntax error")
    if(args[0] === '5s' || args[0] === '4s' || args[0] === '3s' || args[0] === '2s' || args[0] === '1s' || args[0] === '0s') return message.channel.send("You must indicate a time greater than 5s!")
    if(!args[1]) return message.channel.send("You must indicate a reward")
    message.delete()
    let channel, giveaway;
    
    const prefix = `/giveaway ${time} `;
    const a = message.content.slice(prefix.length).split(' ');
    const prize = a.join(' ')
    let actualTime = ms(time)

    

    try{
        if(!channel) {
          let reaction = '🎉';
          let giveawayMessage = await message.channel.send("", {
              embed: new RichEmbed()
                .setTitle("🎉 GIVEAWAY! 🎉")
                .setDescription(`A giveaway was posted by <@${message.author.id}>! \nReact with the reaction ${reaction} to have a chance to win a **${prize}**.`)
                .setColor('RANDOM')
            .setFooter(`The giveaway stops in ${time}. The winner will receive his reward once the giveaway is over.`)
            });
        await giveawayMessage.react(reaction);
    
        let giveawayMessageID = giveawayMessage.id;
        channel = message.channel.id;
          
            let interval = await setInterval (function () {
              time = ms(time)
              time = time - 5000
              time = ms(time)
              
              if(time === '5s' || time === '4s' || time === '3s' || time === '2s' || time === '1s' || time === '0s') clearInterval(interval)
              giveawayMessage.edit("", {
                  embed: new RichEmbed()
                  .setTitle("🎉 GIVEAWAY! 🎉")
                  .setDescription(`A giveaway was posted by <@${message.author.id}>! \nReact with the reaction ${reaction} to have a chance to win a **${prize}**.`)
                  .setColor('RANDOM')
                  .setFooter(`The giveaway stops in ${time}. The winner will receive his reward once the giveaway is over.`)
                });
            }, 5 * 1000);
          
        giveaway = bot.setTimeout(async () => {
            let giveawayMessage = await message.channel.fetchMessage(giveawayMessageID);
    
            let winners = [];
            if (giveawayMessage.reactions.get(reaction)) {
              winners = giveawayMessage.reactions.get(reaction).users.filter(user => !user.bot).map(u => u.id);
            }
    
            let winner;
            while (!winner && winners.length) {
              winner = winners[Math.floor(Math.random() * winners.length)];
              winners.splice(winners.indexOf(winner), 1);
              winner = await bot.fetchUser(winner).catch(() => {});
            }
    
            if (winner) {
    
              giveawayMessage.edit("", {
                  embed: new RichEmbed()
                    .setTitle("🎉 The giveaway is over!")
                    .setDescription(`${winner} is the winner of the giveway! he/she won the ${prize}!\nThank you for your participation!`)
                    .setColor('RANDOM')
              }).catch(err => {
                console.log(err);
              });
    
                winner.send("", {
                  embed: new RichEmbed()
                    .setTitle("🎉 Congratulations 🎉")
                    .setDescription(`You won a giveaway in **${message.guild.name}**! You just won: **${prize}**!`)
                    .setColor('RANDOM')
              }).catch(() => {});
              }
              else {
                giveawayMessage.edit("", {
                  embed: new RichEmbed()
                    .setTitle("🎉 The giveaway is over!")
                    .setDescription(`Unfortunately, no one has participated and apparently there is no winner. 😕`)
                    .setColor('RANDOM')
              }).catch(e => {
                  bot.log.error(e);
                });
              }
    
              channel = null;
          }, actualTime);
        }
        else {
          if (args[0] === 'end') {
            bot.clearTimeout(giveaway);
            channel = null;
    
            message.channel.send("", {
                  embed: new Discord.RichEmbed()
                    .setTitle("🎉 The giveaway is over!")
                    .setDescription(`The giveaway was stopped by: ${message.author.tag}. Sorry, but no reward this time!`)
                    .setColor('RANDOM')
              }).catch(e => {
              bot.log.error(e);
            });
          }
          else {
            return console.log('[Giveaway] Ended')
          }
        }
      } catch (err) {
        console.log(err)
      }

}

module.exports.help = {
    name: "giveaway",
    aliases: ["gstart"],
}