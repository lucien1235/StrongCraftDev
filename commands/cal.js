const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const green = botconfig.green;
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

module.exports.run = async (bot, message, args, msg) => {
      message.delete();

      const question = args.join(' ');
      if (!args[0]) { 
        essage.channel.send("Usage: **/cal <math>**").then(msg => {msg.delete(3000)});;
      } else {    
        let answer;
        try {
            answer = math.eval(question);
        } catch (err) {
            return message.reply(`Error: ${err}`);
        }
      
      const MathEmbed = new Discord.RichEmbed()
      .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
      .setDescription(`
      **Your math question:  : ${question}
      The answer :writing_hand: : ${answer}**`)
      .setFooter(`Requested by | ${message.author.tag}`);
        
      message.channel.send(MathEmbed)
    }

}
module.exports.help = {
  name: "cal",
  aliases: ["math", "calc", "Cal"],
}
