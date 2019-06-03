const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const yellow = botconfig.yellow;

module.exports.run = async (bot, message, args) => {
    message.delete();
        if(!args[0]) return message.channel.send("Usage: **/suggestion <suggestion>**").then(msg => {msg.delete(3000)});;
        const suggestion = args.join(" ").slice(0);
        if(!suggestion) return message.channel.send("Please write a suggestion!");
        let user = bot.user
        let iconURL = user.avatarURL

        const SuggestEmbed = new Discord.RichEmbed()
        .setDescription(`There is a new suggestion posted by **${message.author.username}**`)
        .setColor(yellow)
        .addField(`Suggestion:`, suggestion)
        .setTimestamp()
        .setFooter(bot.user.username, (iconURL));

        let suggestchannel = message.guild.channels.find(`name`, "💡suggestions");
        if (!suggestchannel) return message.channel.send("Couldn't find suggestions channel.").then(msg => {msg.delete(5000)});;

        let suggest = await suggestchannel.send(SuggestEmbed);
        message.channel.send(":white_check_mark: You have successfully placed a suggestion.").then(msg => {msg.delete(5000)});;

        await suggest.react('👍');
        await suggest.react('👎');
    
}

module.exports.help = {
    name: "suggestion",
    aliases: ["suggest"],
}
