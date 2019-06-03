const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const orange = botconfig.orange;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
        message.delete();
        if(args[0] == "help"){
            message.reply("Usage: <prefix>report <user> <reason>");
            return;
        }
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return errors.cantfindUser(message.channel);
        let rreason = args.join(" ").slice(22);
        if(!rreason) return errors.noReason(message.channel);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor(orange)
        .addField("Reported User:", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By:", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel:", message.channel)
        .addField("Time:", message.createdAt)
        .addField("Reason:", rreason);

        let reportschannel = message.guild.channels.find(`name`, "report-log", "server-logs", "🔐server-logs", "🔽discord_reports", "reports");
        if(!reportschannel) return message.channel.send("Couldn't find report-log channel.");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
    
}

module.exports.help = {
    name: "report",
    aliases: [],
}
