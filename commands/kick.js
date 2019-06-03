// Classes
const Discord = require("discord.js");
const errors = require("../utils/errors.js");


// Modules
module.exports.run = async (bot, message, args) => {
    
        // Kicks a user
        
        if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
        if(args[0] == "help"){
            message.reply("Usage: /kick <user> <reason>");
            return;
        }
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return errors.cantfindUser(message.channel);
        let kReason = args.join(" ").slice(22);
        if(!kReason) return errors.noReason(message.channel);
        if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~KICKED~")
        .setColor("#e56b00")
        .addField("Kicked User:", `${kUser} with ID: ${kUser.id}`)
        .addField("Kicked By:", `<@${message.author.id}> with ID: ${message.author.id}`)
        .addField("Kicked In:", message.channel)
        .addField("Time:", message.createdAt)
        .addField("Reason:", kReason);

        let kickChannel = message.guild.channels.find(`name`, "warn-log", "🔐server-logs");
        if(!kickChannel) return message.channel.send("Can't find server-logs channel.");

        message.guild.member(kUser).kick(kReason);
        message.delete().catch(O_o=>{});
        kickChannel.send(kickEmbed);
}

module.exports.help = {
    name: "kick",
    aliases: [],
}
