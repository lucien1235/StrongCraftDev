const {RichEmbed} = require("discord.js");

module.exports.run = (bot, message) => {

    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    if (message.mentions.users.size !== 2) return message.channel.send("You must mention two people!")

    let user1 = message.mentions.users.first();
    let user2 = message.mentions.users.last();
    let member1 = message.guild.member(user1);
    let member2 = message.guild.member(user2);
    let number = Math.floor(Math.random() * 99) + 1;
    
    let LoveCountAmount = new RichEmbed()
    .setColor("#e053cb")
    .setTitle(`**${number}% / 100%** :heart:`);
    message.channel.send("\n:heartpulse: MATCHMAKING :heartpulse:\n*__Declare your love...__*\n :small_red_triangle_down:" + "``" + member1.user.username + "``\n :small_red_triangle:" + "``" + member2.user.username + "``\n");
    message.channel.send(LoveCountAmount)

}

module.exports.help = {
    name: "ship",
    aliases: ["lovecheck", "love", "lovecount"],
}
