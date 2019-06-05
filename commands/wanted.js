const Jimp = require('jimp');
const fsn = require('fs-nextra');

module.exports.run = async (bot, message) => {

    try {
        const user = message.mentions.users.first() || message.author;
        const plate = await fsn.readFile('./images/wanted.jpg');

        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            Jimp.read(plate, (err, avatar) => {
                image.resize(283, 283);
                image.sepia();
                avatar.composite(image, 68, 217);
                avatar.getBuffer(Jimp.MIME_PNG, (error, buffer) => {
                    message.channel.send({
                        files: [{
                            name: 'wasted.png',
                            attachment: buffer
                        }]
                    });
                });
            });
        });

    } catch (err) {
        message.channel.send("An error has occurred, try again later.")
    }
}

module.exports.help = {
    name: "wanted",
    aliases: [""],
}
