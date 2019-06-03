const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

            if (Math.random() < 0.5) {
              message.reply(':money_with_wings: Your coin landed on **Heads**! :money_with_wings:')
            } else {
              message.reply(':money_with_wings: Your coin landed on **Tails**! :money_with_wings:')
            }
    
        } 

module.exports.help = {
    name: "coinflip",
    aliases: ["flip", "coin"],
}
