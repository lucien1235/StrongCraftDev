const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    // !announcement Titel // bericht // kleur // kanaal

    if(!message.member.hasPermission("SEND_TTS_MESSAGES")) return errors.noPerms(message, "SEND_TTS_MESSAGES");

    let divide = "//";

    if(args[0] == null){


        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

        if(!prefixes[message.guild.id]){
           prefixes[message.guild.id] = {
               prefixes: botconfig.prefix
           };
        }
        
        let prefix = prefixes[message.guild.id].prefixes;
        let howtoannouncementmessage = new Discord.RichEmbed()
        .setTitle("Announcement - Command Usage:")
        .setColor("#00ee00")
        .setDescription(`Make an announcement by doing: \n **` + prefix + `announcement Title ${divide} Message ${divide} Color ${divide} Channel**`);

        message.delete().catch(O_o=>{});
        return message.channel.send(howtoannouncementmessage);

    }

    args = args.join(" ").split(divide);

    if(args[2] == undefined) args[2] = "#eeeeee";
    if (args[3] == undefined) args[3] = "💬general";

    let options = {

        Title: args[0] || "Announcement:",
        Message: args[1] || "No content specified",
        Color: args[2].trim(),
        Channel: args[3].trim()

    }

    let announcer = message.author;

    let announcementEmbed = new Discord.RichEmbed()
    .setTitle("Announcement:")
    .setColor(options.Color)
    .setDescription(`Message of ${announcer} \n\n **${options.Title}** \n ${options.Message} \n\n`)
    .setTimestamp();

    let announcementChannel = message.guild.channels.find(`name`, options.Channel);
    if(!announcementChannel) return message.channel.send("I can not find the channel.");

    message.delete().catch(O_o=>{});
    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
  name: "announcement",
  aliases: ["announce"],
}
