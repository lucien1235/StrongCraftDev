const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const yellow = botconfig.yellow;

module.exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send("Usage: **/suggestion <suggestion>**").then(msg => {msg.delete(3000)});;
        let suggestion = args.join(" ").slice(0);
        if(!suggestion) return message.channel.send("Please write a suggestion!");

        let SuggestEmbed = new Discord.RichEmbed()
        .setColor(yellow)
        .setDescription("**Suggestion:**", suggestion)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL);

        let suggestchannel = message.guild.channels.find(`name`, "💡suggestions");
        if (!suggestchannel) return message.channel.send("Couldn't find suggestions channel.").then(msg => {msg.delete(5000)});;

        message.delete().catch(O_o=>{});
        let suggest = await suggestchannel.send(SuggestEmbed);
        message.channel.send(":white_check_mark: You have successfully placed a suggestion.").then(msg => {msg.delete(5000)});;

        await suggest.react('👍');
        await suggest.react('👎');
    
}

module.exports.help = {
    name: "suggestion",
    aliases: ["suggest"],
}
