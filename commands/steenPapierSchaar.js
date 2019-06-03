const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // rps Rock Paper Scissors

    if(!args[0]) return message.channel.send("*Usage:* ***<prefix>rps <rock, paper, scissors>***");

    var options = ["rock", "paper", "scissors"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0] == "rock"){

        if(result == "paper"){

            message.channel.send(`I have ${result} :notepad_spiral:, i win.`);

        }else if(result == "scissors"){
            message.channel.send(`I have ${result} :scissors:, you win.`);
        }else if(result == "rock"){
            message.channel.send(`I have ${result} :moyai:, it is a draw.`);
        }

    }
    else if(args[0] == "paper"){

        if(result == "rock"){

            message.channel.send(`I have ${result} :moyai:, you win.`);

        }else if(result == "scissors"){
            message.channel.send(`I have ${result} :scissors:, i win.`);
        }else if(result == "paper"){
            message.channel.send(`I have ${result} :notepad_spiral:, it is a draw.`);
        }

    }
    else if(args[0] == "scissors"){

        if(result == "rock"){

            message.channel.send(`I have ${result} :moyai:, i win.`);

        }else if(result == "paper"){
            message.channel.send(`I have ${result} :notepad_spiral:, you win.`);
        }else if(result == "scissors"){
            message.channel.send(`I have ${result} :scissors:, it is a draw.`);
        }

    }

}

module.exports.help = {
    name: "rps",
    aliases: ["RockPaperScissors", "sps", "SteenPapierSchaar"],
}
  