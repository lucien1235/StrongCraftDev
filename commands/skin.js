const Discord = require("discord.js");

module.exports.run = async (bot, message, msg) => {

    const args = message.content.split(" ").slice(1).join(" ")
        message.delete();
        if (!args) return message.channel.send("*Usage:* ***/skin (name of player)***").then(msg => {msg.delete(3000)});;
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)

}

module.exports.help = {
    name: "skin",
    aliases: ["mcskin"],
}