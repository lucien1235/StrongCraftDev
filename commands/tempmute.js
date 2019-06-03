const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  // Tempmute Command

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(args[0] == "help"){
    message.reply("Usage: /tempmute <user> <1s/m/h/d> <reason>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return errors.cantfindUser(message.channel);
  if(tomute.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, tomute, "MANAGE_MESSAGES");
  let reason = args.slice(2).join(" ");
  if(!reason) return errors.noReason(message.channel);
  console.log(reason)

  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
      try{
          muterole = await message.guild.createRole({
              name: "Muted",
              color: "#000000",
              permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
              });
          });
      }catch(e){
          console.log(e.stack);   
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("You didn't specify a time!");

    message.delete().catch(O_o=>{});

    try{
        await tomute.send(`Hi, You've been muted for ${mutetime}. Sorry!`)
    }catch(e){
        message.channel.send(`A user has been muted... but their DMs are locked. They wil be muted for ${mutetime}.`)
    }

    let muteembed = new Discord.RichEmbed()
    .setDescription(`Mute executed by ${message.author}`)
    .setColor("#fc6400")
    .addField("Muted User:", tomute)
    .addField("Muted In:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Length", mutetime)
    .addField("Reason:", reason);

    let warnchannel = message.guild.channels.find(`name`, "warn-log")
    if(!warnchannel) return message.reply("Please create a warn-log channel first!")
    warnchannel.send(muteembed)

    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.delete().catch(O_o=>{});
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

    
//end of module
}

module.exports.help = {
    name: "tempmute",
    aliases: ["tmute"],
}
