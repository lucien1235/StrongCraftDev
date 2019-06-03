const { RichEmbed } = require("discord.js");

exports.run = async (bot, message) => {
    message.delete();

    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    const killmention = message.mentions.users.first();

    if (!killmention) {
        return message.channel.send("You must mention a user!\nUsage: **/kill <username>**").then(msg => {msg.delete(5000)});
    }

    const distance = [
        "150 meters",
        "300 meters",
        "600 meters",
        "800 meters"
    ]

    const distance1 = (distance[Math.floor(Math.random() * distance.length)])

    const kill = [
        `:bomb: You managed to blow yourself up and ${killmention} with your own bomb in your car!`,
        `:bomb: You blew up ${killmention}!`
        `:knife: ${killmention} was doing self defense and turning the blade against you! Pity...`,
        `:gun: ${killmention} was also hired killer and fired faster than you! Pity...`,
        `:gun: You managed to kill ${killmention} at about ${distance1}!`,
        `:skull: You couldn't kill ${killmention}, he committed suicide by looking at the mirror...`,
        `:fire: You have burned ${killmention}.`,
        `:gun: You managed to kill ${killmention} with your P99 with a sound reduction!`,
        `:tea: You managed to kill ${killmention} by poisoning your drink.`
    ];

    const kill1 = (kill[Math.floor(Math.random() * kill.length)])

    const KillEmbed = new RichEmbed()
        .setDescription(kill1)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`Requested by | ${message.author.username}`);

    message.channel.send(KillEmbed)
}

module.exports.help = {
    name: "kill",
    aliases: [""],
}
