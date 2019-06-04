const {RichEmbed} = require("discord.js");
const got = require("got")
const cheerio = require("cheerio")
const MojangAPI = require("mojang-api")

exports.run = async (bot, message) => {
    if (!message.guild.member(bot.user).hasPermission('SEND_MESSAGES')) return;
    const args = message.content.split(" ");

    if (!args[1]) {
        message.channel.send("You have to tell me a nickname!\nUsage: **/mcuser <mc-name>**").then(msg => {msg.delete(3000)});;
        return;
    }
    const username = args[1]

    try {

        async function getShortUUID(username) {
            const res = await got(`https://mcuuid.net/?q=${username}`);
            const $ = cheerio.load(res.body);
            const input = $('input')[2];

            if (!input) {
                return;
            }

            return input.attribs['value'];
        }


        async function getLongUUID(username) {
            const res = await got(`https://mcuuid.net/?q=${username}`);
            const $ = cheerio.load(res.body);
            const input = $('input')[1];

            if (!input) {
                return;
            }

            return input.attribs['value'];
        }

        const shortuuid = await getShortUUID(username);
        const longuuid = await getLongUUID(username);
        if (!shortuuid && !longuuid) {
            message.channel.send(`The username **${username}** does not exist!`).then(msg => {msg.delete(3000)});;
            return;
        }

        MojangAPI.nameHistory(`${shortuuid}`, function (err, res) {
            if (err)
                console.log(err);
            var lastName = res[res.length - 2];
            var lastName2 = res[res.length - 3];

            var lastName4 = res[res.length - 5];
            var lastName5 = res[res.length - 6];
            var lastName6 = res[res.length - 7];
            var lastName7 = res[res.length - 8];
            var lastName8 = res[res.length - 9];

            if (!lastName) {
                var embed = new RichEmbed()
                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `**${username}** have not changed their nickname!`)
                    .addField(":alarm_clock: | Last change of username :", `**${username}** have not changed their nickname!`)
                return message.channel.send({
                    embed: embed
                })
            }
            if (!lastName2) {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var embed = new RichEmbed()
                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                });
            }
            var lastName3 = res[res.length - 4];
            if (!lastName3) {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var name2 = lastName2.name;
                var embed = new RichEmbed()
                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1} <- ${name2}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                })

            }
            if (!lastName4) {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var name2 = lastName2.name;
                var name3 = lastName3.name;
                var embed = new RichEmbed()

                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1} <- ${name2} <- ${name3}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                })


            }
            if (!lastName5) {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var name2 = lastName2.name;
                var name3 = lastName3.name;
                var name4 = lastName4.name;
                var embed = new RichEmbed()

                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1} <- ${name2} <- ${name3} <- ${name4}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                })

            }
            if (!lastName6) {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var name2 = lastName2.name;
                var name3 = lastName3.name;
                var name4 = lastName4.name;
                var name5 = lastName5.name;
                var embed = new RichEmbed()

                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                })
            }
            if (!lastName7) {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var name2 = lastName2.name;
                var name3 = lastName3.name;
                var name4 = lastName4.name;
                var name5 = lastName5.name;
                var name6 = lastName6.name;
                var embed = new RichEmbed()

                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5} <- ${name6}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                })
            }
            if (!lastName8) {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var name2 = lastName2.name;
                var name3 = lastName3.name;
                var name4 = lastName4.name;
                var name5 = lastName5.name;
                var name6 = lastName6.name;
                var name7 = lastName7.name;
                var embed = new RichEmbed()

                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5} <- ${name6}  <- ${name7}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                })
            } else {
                var at = new Date(lastName.changedToAt);
                var name1 = lastName.name;
                var name2 = lastName2.name;
                var name3 = lastName3.name;
                var name4 = lastName4.name;
                var name5 = lastName5.name;
                var name6 = lastName6.name;
                var name7 = lastName7.name;
                var name8 = lastName8.name;
                var embed = new RichEmbed()
                    .setTitle("Minecraft Profile")
                    .setColor('RANDOM')
                    .setThumbnail(`https://minotar.net/armor/body/${args[1]}/100.png`)
                    .addField("🏷 | Username :", username)
                    .addField("💳 | UUID shortcut :", `\`${shortuuid}\``)
                    .addField("💳 | UUID :", `\`${longuuid}\``)
                    .addField("👥 | Skin :", `[Download](https://crafatar.com/skins/${shortuuid}.png)`)
                    .addField(":film_frames: | Username history :", `${name1} <- ${name2} <- ${name3} <- ${name4} <- ${name5} <- ${name6} <- ${name7} <- ${name8}`)
                    .addField(":alarm_clock: | Last change of username :", `${at}`)
                return message.channel.send({
                    embed: embed
                });
            }
        });
    } catch (err) {
        message.channel.send("An error has occurred! Please try again later.").then(msg => {msg.delete(3000)});;
    }
}

exports.help = {
    name: "mcuser",
    aliases: [""],
}
