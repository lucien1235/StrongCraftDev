const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // 8ball Command
    if(!args[2]) return message.channel.send(`:8ball: Please ask a full question! :8ball:`).then(msg => {msg.delete(3000)});;
    let replies = ["Yes.", "No.", "I don't know.", "Ask again later please.", "Maybe...", "Who knows...", "Very doubtful.", "Concentrate and ask again.", "Without a doubt.", "It is decidedly so.", "My sources say no.", "Outlook good.", "Cannot predict now.", "Outlook not so good.", "It is certain.", "My reply is no.", "My reply is yes.", "Don't count on it.", "Most likely.", "You may rely on it.", "Signs point to yes.", "Needs a lot of thinking :thinking:"];

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(1).join(" ");
    let user = message.author
    let iconURL = user.avatarURL

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, (iconURL))
    .setColor("#FF9900")
    .addField("Question :", question)
    .addField("Answer : ", replies[result])
    .setFooter(`Requested by | ${message.author.tag}`);

    message.delete();
    message.channel.send(ballembed);

}

module.exports.help = {
    name: "8ball",
    aliases: ["8b", "eightball"],
}
