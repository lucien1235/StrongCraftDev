const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
       prefixes[message.guild.id] = {
           prefixes: botconfig.prefix
       };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    let sicon = message.guild.iconURL

    let pages = [
        `**__Help Menu__**\n__Member Commands:__\n\n **${prefix}help** \nView this menu.\n\n**${prefix}serverinfo** \nView the server details.\n\n**${prefix}botinfo** \nView the bot details.\n\n**${prefix}suggestion** \nCreate a suggestion.\n*Usage:* ***${prefix}suggestion <suggestion>***\n\n**${prefix}report** \nReport users/staff members to higher staff.\n*Usage:* ***${prefix}report <user> <reason>***\n\n**${prefix}ping** \nPing of the bot.\n\n**${prefix}invite** \nGet the Discord invites.\n`,
        `**__Help Menu__**\n__Member Commands:__\n\n **${prefix}google** \n"Search something on Google.\n*Usage:* ***${prefix}google <search>***.\n\n**${prefix}uptime** \nUptime of the bot.\n\n**${prefix}membercount** \nView the membercount of ${message.guild.name}.\n`,
        `**__Help Menu__**\n__Member Commands:__\n\n **${prefix}meme**\nGet/view a meme.\n\n**${prefix}short** \nMake a link short.\n*Usage:* ***${prefix}short <link>***\n`,
        `**__Help Menu__**\n__Member Commands:__\n\n **${prefix}quiz** \nPlay the quiz!\n\n**${prefix}cal** \nCalculator.\n`,
        `**__Help Menu__**\n__Member Commands:__\n\n **${prefix}ip** \nStrongCraft Server Adress.\n\n**${prefix}website** \nStrongCraft Website.\n\n**${prefix}ranks** \nStrongCraft Ranks.\n\n**${prefix}reports** \nStrongCraft Reports.\n\n**${prefix}rules** \nView the rules.\n\n**${prefix}review** \nWrite a review.\n`
    ];
    
      let page = 1;

      const helpembed = new Discord.RichEmbed()
        .setColor("#0b47a8")
        .setThumbnail(sicon)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setTimestamp()
        .setDescription(pages[page-1])

      message.delete();
      message.channel.send(helpembed).then(msg => {

        msg.react('⏪').then( r => {
          msg.react('⏩')

          const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

          const backwards = msg.createReactionCollector(backwardsFilter);
          const forwards = msg.createReactionCollector(forwardsFilter);


          backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            helpembed.setDescription(pages[page-1]);
            helpembed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(helpembed)
          })

          forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            helpembed.setDescription(pages[page-1]);
            helpembed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(helpembed)
          })
        })
    })

    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let divide = "//";
    const ModerationEmbed = new Discord.RichEmbed()
    .setTitle("**Bot Commands**")
    .setColor("#ff0000")
    .setThumbnail(sicon)
    .setDescription(":police_car: Basic Moderation :police_car:")
    .addField("``" + prefix + "send <@user> <message>``", "Sends a DM message to a certain user.")
    .addField("``" + prefix + "warn <@user> <reason>``", "Warns a certain user.")
    .addField("``" + prefix + "warnlevel <@user>``", "Check a players previous warnings.")
    .addField("``" + prefix + "kick <@user> <reason>``", "Kicks a user from the server.")
    .addField("``" + prefix + "ban <@user> <reason>``", "Bans a user from the server.")
    .addField("``" + prefix + "unmute <@user>``", "Unmute a user from the server.")
    .addField("``" + prefix + "mute <@user> <reason>``", "Mutes a certain user.")
    .addField("``" + prefix + "tempmute <user> <1s/m/h/d> <reason>``", "Temporarily mutes a user.")
    .addField("``" + prefix + "say <message>``", "Says a message as the bot.")
    .addField("``" + prefix + "clear``", "Delete previous messages.")
    .addField("``" + prefix + "prefix <prefix>``", "Change the bots prefix.")
    .addField("``" + prefix + "poll <question>``", "Creates a poll.")
    .addField("``" + prefix + "announcement Title" + divide + "Message" + divide + "Color" + divide + "Channel``", "Create an announcement")
    .addField("``" + prefix + "whois <@user>``", "Get information about a certain user.")
    .addField("``" + prefix + "update <message>``", "Announce an update.")
    .addField("``" + prefix + "roleinfo <role>``", "Get information about a role.")
    .setTimestamp()
    .setFooter(message.author.username);

    try{
        message.author.send(ModerationEmbed);
    }catch(e){
        message.reply("Your DMs are locked. I cannot send you the Mod commands.");
     }
    }

    if (message.author.id === "315577349192286228") {
        let bOwnerEmbed = new Discord.RichEmbed()
        .setTitle("**Bot Commands**")
        .setColor("#0400ff")
        .setThumbnail(sicon)
        .setDescription(":mega: StrongCraft Moderation Commands :mega:")
        .addField("``" + prefix + "setActivity <game>``", "Chance the bots status.")
        .addField("``" + prefix + "setStatus <status>``", "Change the status of the bot.")
        .addField("``" + prefix + "reload``", "Reload the bot.")
        .addField("``" + prefix + "stats``", "View the bot stats.")
        .addField("``" + prefix + "giveaway <time> <reward>``", "Starts a giveaway.");

        try{
            message.author.send(bOwnerEmbed);
        }catch(e){
            message.reply("Your DMs are locked. I cannot send you the Bot Owner commands.");
         }
        }

}

module.exports.help = {
    name: "help",
    aliases: ["?"],
}
