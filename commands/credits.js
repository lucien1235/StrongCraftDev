const { RichEmbed } = require("discord.js");

module.exports.run = (bot, message) => {
  if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
        
        const user = message.author;

        const credits = new RichEmbed()
            .setTitle("Credits")
            .setAuthor(`${user.username}`, user.displayAvatarURL)
            .setDescription("StrongCraft Credits Information:")
            .addField(":keyboard: | Development:","`Destitution#5128`", true)
            .addField(":thought_balloon: | Contributeurs :", "`None`", true)       
            .addField(":bulb: | Language :", "`JavaScript`", true)
            .addField(":desktop: | Framework :", "`Node.js`", true)
            .addField(":bookmark: | IDE :", "`Visual Studio Code`", true)
            .addField(":necktie: | Adminstrators Bot :", "`Destitution#5128`", true) 
            .setColor('RANDOM')
            .setTimestamp();
            
            message.channel.send(credits);
}

module.exports.help = {
    name: "credits",
    aliases: ["credit"],
}
