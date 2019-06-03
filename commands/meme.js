const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;

  randomPuppy('memes').then(url => {
    
    const memeEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setImage(url)
        .setTimestamp()
        .setFooter(`Requested by | ${message.author.tag}`);
      
    message.delete();
    message.channel.send(memeEmbed)
  })
}

module.exports.help = {
  name: "meme",
  aliases: ["memes"],
}