const Discord = require("discord.js");
const googl = require('goo.gl');

module.exports.run = async (bot, message, args) => {

    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('***Usage:*** */short (link)*').then(msg => {msg.delete(3000)});;
        });

}
module.exports.help = {
    name: "short",
    aliases: ["googleshort", "shortlink", "linkshort"],
}
