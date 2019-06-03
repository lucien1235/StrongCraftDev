const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    // Warn Command
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] == "help"){
      message.reply("Usage: /warn <user> <reason>");
      return;
    }
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return errors.cantfindUser(message.channel);
    if (wUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, wUser, "MANAGE_MESSAGES");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("Warned User:", `<@${wUser.id}>`)
    .addField("Warned In:", message.channel)
    .addField("Number of Warnings:", warns[wUser.id].warns)
    .addField("Reason:", reason);

    let warnchannel = message.guild.channels.find(`name`, "warn-log", "🔐server-logs", "server-logs");
    if(!warnchannel) return message.reply("Couldn't find warn-log channel");

    message.delete().catch(O_o=>{});
    warnchannel.send(warnEmbed);

    if(warns[wUser.id].warns == 4){
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole) return message.reply("you should create that role dude.");

        let mutetime = "15m";
        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily muted`);

        setTimeout(function(){
            wUser.removeRole(muterole.id)
            message.reply(`<@${wUser.id}> has been unmuted.`)
        }, ms(mutetime))
    }

}

module.exports.help = {
    name: "warn",
    aliases: [],
}
