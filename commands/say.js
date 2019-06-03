const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  // !say <message>

      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

      if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
          prefixes: botconfig.prefix
        };
      }

      let prefix = prefixes[message.guild.id].prefixes;

  message.delete();
  if(!message.member.hasPermission("SEND_TTS_MESSAGES")) return errors.noPerms(message, "SEND_TTS_MESSAGES");
  if (!args[0]) return message.channel.send(`*Usage:* ***` + prefix + `say <message>***`).then(msg => {msg.delete(3000)});;
  message.channel.startTyping();
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
  message.channel.stopTyping();
}

module.exports.help = {
  name: "say",
  aliases: ["echo"],
}
