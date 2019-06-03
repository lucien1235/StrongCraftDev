const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

      message.delete();

      let replies = [
        "Heads",
        "Tails",
      ]
    
      let result = Math.floor((Math.random() * replies.length))

      let CoinFlipEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`:money_with_wings: Your coin landed on **${replies[result]}**! :money_with_wings:`)
      .setFooter(`${message.author.username} has thrown a coin!`);
            
      message.channel.send(CoinFlipEmbed);     
  } 

module.exports.help = {
    name: "coinflip",
    aliases: ["flip", "coin", "cf"],
}
