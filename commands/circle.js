var circle = require('@fand/circle-text')


module.exports.run = (bot, message, args) => {
    message.delete();
    if (!args[0]) return message.channel.send("Provide a message please.").then(msg => {msg.delete(3000)});;

    const sayMessage = args.join(" ");

    message.channel.send(circle(sayMessage));
}






module.exports.help = {
    name: "circle",
    aliases: [""],
}