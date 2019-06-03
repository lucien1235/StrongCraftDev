const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    let sicon = message.guild.iconURL

    const gamesembed = new Discord.RichEmbed()
        .setTitle("__Games & Funny Commands Menu__")
        .setColor("#0b47a8")
        .setThumbnail(sicon)
        .setDescription("A list with different game commands.")
        .addField(prefix + "skin", `Get the minecraft skin of a certain player.\nUsage: **${prefix}skin <minecraft username>**`)
        .addField(prefix + "8ball", `Ask questions and get answers on the questions.\nUsage: **${prefix}8ball <question>**`)
        .addField(prefix + "qrc", `Provide some text to generate that in a QR code.\n*Usage:* ***${prefix}qrc <text>***`)
        .addField(prefix + "avatar", `Get you're or someone's avatar.\nUsage: **${prefix}avatar <@user>**`)
        .addField(prefix + "rps", `Rock, paper or scissors.\nUsage: **${prefix}rps <rock, paper, scissors>**`)
        .addField(prefix + "emojify", `Provide some text to emojify.\nUsage: **${prefix}emojify <text>**`)
        .addField(prefix + "ship", `Ship 2 people with each other.\nUsage: **${prefix}ship <@user> <@user>**`)
        .addField(prefix + "hug", `Hugs a certain user.\nUsage: **${prefix}hug <@user>**`)
        .addField(prefix + "slap", `Slaps a certain user.\nUsage: **${prefix}slap <@user>**`)
        .addField(prefix + "kiss", `Kiss a certain user.\nUsage: **${prefix}kiss <@user>**`)
        .addField(prefix + "pat", `Pat a certain user.\nUsage: **${prefix}pat <@user>**`)
        .addField(prefix + "lmgtfy", `Creates a lmgtfy link.\nUsage: **${prefix}lmgtfy <message>**`)
        .addField(prefix + "emote", `Gives you an emote picture.\nUsage: **${prefix}emote <emoji>**`)
        .addField(prefix + "fancy", `Make a fancy message.\nUsage: **${prefix}fancy <message>**`)
        .addField(prefix + "lies", "Let the bot decide that he/she speaks the truth.")
        .addField(prefix + "capitals", "Guess the Capitals.")
        .addField(prefix + "advice", "Get some advice from the bot!")
        .addField(prefix + "coinflip", "Flips a coin!")
        .addField(prefix + "quiz", "Play the quiz!")
        .addField(prefix + "slots", "Spin the slot machine.")
        .addField(prefix + "roll", "Rolls a six sided dice.")
        .addField(prefix + "woof", "Get some dog pictures.")
        .addField(prefix + "meow", "Get some cat pictures.")
        .addField(prefix + "meme", "Get some meme pictures.")
        .addField(prefix + "cook", "What are we going to eat today?")
        .setTimestamp()
        .setFooter(`${message.author.username}`);

    message.delete();
    message.author.send(gamesembed);
    message.channel.send(":white_check_mark: Successfully sent a DM with the game commands!").then(msg => {msg.delete(3000)});;
    
}

module.exports.help = {
    name: "games",
    aliases: ["Games", "game", "Game"],
}
