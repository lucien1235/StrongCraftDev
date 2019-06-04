module.exports.run = (bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("I do not have the permissions to send an image!").then(msg => {msg.delete(3000)});;

    try {
        let MCnaam = args.join(" ")
        if (!MCnaam) return message.channel.send('You have to specify a Minecraft nickname!').then(msg => {msg.delete(3000)});;
        message.channel.send({
            files: [{
                attachment: `https://minotar.net/avatar/${MCnaam}/100.png`,
                name: 'skull.png'
            }]
        }).catch((err) => {
            message.reply("Error, this nickname does not exist!").then(msg => {msg.delete(3000)});;

        });

    } catch (err) {
        message.channel.send("Error, this nickname does not exist!").then(msg => {msg.delete(3000)});;
    }
}

module.exports.help = {
    name: "skull",
    aliases: ["mcskull"],
}
