    const encode = require('strict-uri-encode');

    module.exports.run = (bot, message, args, tools) => {

            let question = encode(args.join(' '));
            if(!args[0]) return message.channel.send("Please provide a message.").then(msg => {msg.delete(3000)});;

            let link = `https://www.lmgtfy.com/?q=${question}`;

            message.channel.send(`**<${link}>**`);
}

module.exports.help = {
    name: "lmgtfy",
    aliases: [""],
}