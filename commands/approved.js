const snek = require('snekfetch');
const fsn = require('fs-nextra');
const {Canvas} = require('canvas-constructor');

module.exports.run = async (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;

    if (!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.reply("I do not have the permissions to send an image!")

    const getSlapped = async (person) => {
        const plate = await fsn.readFile('./images/approved.png');
        const png = person.replace('.gif', '.png');
        const {
            body
        } = await snek.get(png);
        return new Canvas(250, 250)
            .resetTransformation()
            .addImage(body, 0, 0, 250, 250)
            .addImage(plate, 0, 0, 250, 250)
            .toBuffer();
    }
    try {
        let person

        if (message.mentions.users.size < 1) {
            person = (message.author.avatarURL !== null) ? message.author.avatarURL : "https://cdn.discordapp.com/embed/avatars/0.png"
        } else {
            person = (message.mentions.users.first().avatarURL !== null) ? message.mentions.users.first().avatarURL : "https://cdn.discordapp.com/embed/avatars/0.png"
        }

        const result = await getSlapped(person);
        await message.channel.send({
            files: [{
                attachment: result,
                name: 'approved.png'
            }]
        });
    } catch (error) {
        return message.channel.send("An error has occurred, try again later.")
    }
}

module.exports.help = {
    name: "approved",
    aliases: [""],
}
