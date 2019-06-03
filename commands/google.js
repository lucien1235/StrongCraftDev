const Discord = require("discord.js");
const google = require("google");
const botconfig = require("../botconfig.json");
const green = botconfig.green;

//╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━━┳━━┳━━┫┃╭━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╭╮┃╭╮┃╭╮┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃╰╯┃╰╯┃╰╯┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━╮┣━━┻━━┻━╮┣━┻━━╯╰━━┻┻┻┻╯╰┻━━╯
//╭━╯┃╱╱╱╱╱╭━╯┃
//╰━━╯╱╱╱╱╱╰━━╯

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!args[0]) return message.channel.send(`Hey ${message.author}, what do you want to look up?`).then(msg => {msg.delete(5000)});;

  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Google search result for ${args}`.split(',').join(' '))
        .setColor(green)
        .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
        .addField('Website', link.title)
        .addField('Description', link.description)
        .addField('URL', link.href)
        .setFooter(`Requested by | ${message.author.tag}`);

        message.channel.send(gEmbed).then(msg => {msg.delete(15000)});;
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });

}

module.exports.help = {
  name: "google",
  aliases: [""],
}