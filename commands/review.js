const Discord = require("discord.js");

const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const aantalSterren = args[0];

    message.delete();
    if (!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Enter a number of stars! Choose between 1 and 5.").then(msg => {msg.delete(3000)});;

    const bericht = args.splice(1, args.length).join(' ') || '**No message provided.**';

    var reviewChannel = message.guild.channels.find('name', '📋review');
    if (!reviewChannel) return message.channel.send("Channel not found!").then(msg => {msg.delete(3000)});;

    var sterren = "";
    for (var i = 0; i < aantalSterren; i++) {

        sterren += ":star: ";

    }

    message.delete();

    const review = new discord.RichEmbed()
        .setTitle(`${message.author.username} wrote a review! :tada:`)
        .setColor("#00ff00")
        .setThumbnail(message.author.avatarURL, true)
        .addField("Stars:", `${sterren}`)
        .addField("Review comment:", `${bericht}`);

    message.channel.send(":white_check_mark: You have successfully written a review!");
    return reviewChannel.send(review);

}

module.exports.help = {
    name: "review",
    aliases: ["rev"],
}
