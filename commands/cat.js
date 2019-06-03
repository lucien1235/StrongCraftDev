const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`http://aws.random.cat//meow`);

    let catembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Cat :cat:")
    .setImage(body.file)
    .setFooter(`Requested by | ${message.author.tag}`);

    message.delete();
    message.channel.send(catembed).then(msg => {msg.delete(5000)});;

}

module.exports.help = {
    name: "cat",
    aliases: ["meow"],
}
  