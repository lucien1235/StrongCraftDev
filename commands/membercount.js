const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
        if (!message.channel.guild) return;
    
            message.channel.send(`𝕾𝖙𝖗𝖔𝖓𝖌𝕮𝖗𝖆𝖋𝖙 𝕱𝖗𝖎𝖊𝖓𝖉𝖘 has: **👥 ${message.guild.memberCount}** users :ok_hand:`);
            message.delete()

}

module.exports.help = {
    name: "membercount",
    aliases: ["members", "mcount", "users"],
}