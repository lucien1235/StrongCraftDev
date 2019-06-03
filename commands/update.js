const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

      if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
          prefixes: botconfig.prefix
        };
      }

      let prefix = prefixes[message.guild.id].prefixes;

        let rank = message.guild.member(message.author).roles.find('name', 'Staff');
        if (!rank) return message.reply('*You need a **Staff** rank to use this command.*').then(msg => {msg.delete(3000)});;

        message.delete();
        if (!args[0]) return message.channel.send(`*Usage:* ***` + prefix + `update <arguments>***`).then(msg => {msg.delete(3000)});;

        const updateEmbed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL, true)
        .setAuthor('Update:')
          .setDescription(args.join("  "))
          .setColor(0x06DF00)

        let updatechannel = message.guild.channels.find(`name`, "📜updates");
        if (!updatechannel) return message.channel.send("Couldn't find update channel.");

        message.delete().catch(O_o => {});
        updatechannel.send(updateEmbed);
        message.channel.send(":white_check_mark: The update is successfully announced.").then(msg => {msg.delete(5000)});;

}

module.exports.help = {
  name: "update",
  aliases: [],
}
