const {
    RichEmbed
} = require("discord.js");
const request = require("request");

exports.run = (bot, message, args) => {
    message.delete();
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    let suffix = args.join(" ");
    let statut = {
        "true": "Yes",
        "false": "No",
    };

    const embed = new RichEmbed();
    if (suffix == "" || suffix == null) return message.channel.sendMessage("You must indicate a server IP!\nUsage: **/mcstats <IP>**").then(msg => {msg.delete(3000)});;
    request("https://eu.mc-api.net/v3/server/info/" + suffix + "/json",
        function (err, res, body) {
            let data = JSON.parse(body);
            if (data.online) {
                embed.setTitle("Minecraft Server Status")
                embed.setColor('#398947')
                embed.setThumbnail(data.favicon)
                embed.setTimestamp()
                embed.addField("IP : ", suffix, true)
                embed.addField("Players online : ", data.players.online, true)
                embed.addField("Max players : ", data.players.max, true)
                embed.addField("Online : ", statut[data.online], true)
                embed.addField("Version : ", data.version.name, true)
                embed.addField("Protocol : ", data.version.protocol, true)
                embed.setFooter(message.author.username, message.author.avatarURL)

                message.channel.send({
                    embed
                })

            } else {
                embed.setTitle("Minecraft Server Status")
                embed.setColor('#8c1a1a')
                embed.setThumbnail(data.favicon)
                embed.setTimestamp()
                embed.addField("Server off ! ", "This server is either off or unreported!")
                embed.setFooter(bot.user.username, bot.user.avatarURL)

                message.channel.send({
                    embed
            })
        }
    })
}
exports.help = {
    name: "mcserver",
    aliases: ["mcstats", "serverstats"],
}
