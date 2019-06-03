const {RichEmbed} = require("discord.js");

exports.run = (bot, message) => {
    message.delete();
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    let replys = [
        ":hamburger: Hamburger",
        ":cooking: Eggs",
        ":hotdog: Hotdog",
        ":pizza: Pizza",
        ":sushi: Sushi",
        ":cookie: Cookie",
        ":paella: Paella",
        ":salad: Salad",
        ":pancakes: Pancakes",
        ":stuffed_pita: Stuffed Pita",
        ":cake: Cake",
        ":rice: Rice",
        ":poultry_leg: Chicken leg",
        ":fries: Fries",
        ":bento: Bento",
        ":bread: Bread",
        ":taco: Taco",
        ":pudding: Pudding",
        ":doughnut: Donut",
        ":potato: Potato",
        ":popcorn: Popcorn"
    ];

    const reponse = (replys[Math.floor(Math.random() * replys.length)])
    const user = message.author;

    const CookEmbed = new RichEmbed()
        .setAuthor(user.username, user.displayAvatarURL)
        .addField(":fork_and_knife: We eat today...", reponse)
        .setColor("#bfd2f2")
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp(new Date())
    message.channel.send(CookEmbed)
}

exports.help = {
    name: "cook",
    aliases: [""],
}
