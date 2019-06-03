const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Doggo :dog:")
    .setImage(body.url)
    .setFooter(`Requested by | ${message.author.tag}`);

    message.delete();
    message.channel.send(dogembed).then(msg => {msg.delete(5000)});;

}

module.exports.help = {
    name: "dog",
    aliases: ["doggo", "woof"],
  }
  