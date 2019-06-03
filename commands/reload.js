const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

  if (message.author.id === "315577349192286228") {
    message.delete();
    message.channel.send(":gear: Reload in process").then(msg => {msg.delete(2000)});;
    
    bot.destroy()
    bot.login("process.env.BOT_TOKEN")
  message.channel.send(":white_check_mark: Reload has been done!").then(msg => {msg.delete(2000)});;
  } else {
      
  message.channel.send("You do not have permissions!").then(msg => {msg.delete(5000)});;
    
    }
}
module.exports.help = {
    name: "reload",
    aliases: ["reboot", "restart"],
}
