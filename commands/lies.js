const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // ! Lies Command
    let replies = ["Indeed lying.", "False.", "Not Lying", "True.", "You have liar printed on your face.", "I can smell your lies from here.", "Indeed true.", "I confirm.", "I can confirm.", "Legit"];

    let result = Math.floor((Math.random() * replies.length))

    message.channel.send(replies[result])

}

module.exports.help = {
    name: "lies",
    aliases: ["lie"],
}