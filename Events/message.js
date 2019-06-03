module.exports = (bot, message) => {

    const Discord = require("discord.js");
    const fs = require("fs");

    var messageArray = message.content.toLowerCase().split(" ");
    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));
    var sentenceUser = "";
    var amountSwearWords = 0;
    var sender = message.author;

    for (var y = 0; y < messageArray.length; y++) {

        var changeWord = "";

        for (var i = 0; i < swearWords["vloekWoorden"].length; i++) {

            var word = messageArray[y].toLowerCase();

            if (word == swearWords["vloekWoorden"][i]) {

                changeWord = word.replace(swearWords["vloekWoorden"][i], "%#%#");

                sentenceUser = sentenceUser + " " + changeWord;

                amountSwearWords++;

            }

        }

        if (!changeWord) {

            sentenceUser = sentenceUser + " " + messageArray[y];

        }

    }

    if (amountSwearWords != 0) {

        message.delete();
        message.channel.send("", {
            embed: new Discord.RichEmbed()
                .setColor("RED")
                .setTitle("No swearing please!")
                .setDescription("Message : " + sentenceUser)
                .setFooter(`Message from : ${message.author.tag}`)
        })

    }

    if (message.content.toLowerCase() === (`ooo`)) {
        message.channel.send(`oOooOooOo`);
        }

    if (message.content.toLowerCase() === (`oo`)) {
        message.channel.send(`oOooOooOo`);
        }

    if (message.content.toLowerCase().startsWith(`ty <@550837323441373195>`)) {
        message.channel.send(`No problem ${message.author}!`);
        }

    if (message.content.toLowerCase().startsWith(`thanks <@550837323441373195>`)) {
        message.channel.send(`No problem ${message.author}!`);
        }

    if (message.content === '<@550837323441373195> how are you?') {
        message.channel.send('Im good, you?');
        }

    if (message.content.toLowerCase().startsWith(`im good too`)) {
        message.channel.send('Nice, so what do you want from me?');
        }

    if (message.content === '<@550837323441373195> well i have something to tell you') {
        message.channel.send('What is it? Tell me');
        }

    if (message.content.toLowerCase() === (`hoi <@550837323441373195>`)) {
        message.channel.send(`Hey ${message.author}`);
        }

    if (message.content.toLowerCase() === (`hi <@550837323441373195>`)) {
        message.channel.send(`Hey ${message.author}`);
        }

    if (message.content.toLowerCase() === (`hello <@550837323441373195>`)) {
        message.channel.send(`Hey ${message.author}`);
        }

    if (message.content.toLowerCase() === (`hey <@550837323441373195>`)) {
        message.channel.send(`Hey ${message.author}`);
        }

    if (message.content === `<@550837323441373195> who's your owner?`) {
        message.channel.send('<@315577349192286228> Is my Creator and Owner.');
        }

    if (message.content === `<@550837323441373195> who made you?`) {
        message.channel.send('<@315577349192286228> created me.');
        }

    if (message.content === `<@550837323441373195> nub`) {
        message.channel.send(`${message.author} no u`);
        }

    if (message.content === `<@550837323441373195> ur face`) {
        message.channel.send(`${message.author} no u`);
        }

    if (message.content.toLowerCase().startsWith(`oh so that is your creator/owner?`)) {
        message.channel.send('Yeah he is.');
        }

    if (message.content === '<@550837323441373195> umm.. can i become a staff?') {
        message.channel.send('Hmm... no.. if you ask for staff/ranks you wont get it :smirk:');
        }

    if (message.content === '<@550837323441373195> can i become a staff?') {
        message.channel.send('Hmm... no.. if you ask for staff/ranks you wont get it :smirk:');
        }

    if (message.content.toLowerCase().startsWith(`can i become a staff`)) {
        message.channel.send('Hmm... no.. if you ask for staff/ranks you wont get it :smirk:');
        }

    if (message.content === '<@550837323441373195> what is NSFW meaning?') {
        message.channel.send('That means "its Not Safe For Wife" thats only for 18+');
        }

    if (message.content === '<@550837323441373195> what is the meaning of NSFW?') {
        message.channel.send('That means "its Not Safe For Wife" thats only for 18+');
        }

    if (message.content === '<@550837323441373195> where you`ve been at?') {
        message.channel.send('Im here Sir! Any problems?');
        }

    if (message.content === '<@550837323441373195> where you come from?') {
        message.channel.send('Well.. im a Bot, and im not a human, and my system is from Command Prompt System32');
        }

    if (message.content === '<@550837323441373195> where are you from?') {
        message.channel.send('Well.. im a Bot, and im not a human, and my system is from Command Prompt System32');
    }

    if (message.content === '<@550837323441373195> how many members in this guild?') {
        message.channel.send(`Its about **${message.guild.memberCount} users** in this guild :open_mouth:`);
    }

    if (message.content === '<@550837323441373195> whats my id?') {
        message.channel.send(`Oh hey ${message.author}! Your ID is ${message.author.id}`);
    }

    if (message.content === '<@550837323441373195> whats my id') {
        message.channel.send(`Oh hey ${message.author}! Your ID is ${message.author.id}`);
    }

    if (message.content === '<@550837323441373195> hmm') {
        message.channel.send(`hMMMMMMM`);
    }

    if (message.content.toLowerCase() === (`hmmmm`)) {
        message.channel.send(`hMMMMMMM`);
    }

    if (message.content.toLowerCase() === (`hmmm`)) {
        message.channel.send(`hMMMMMMM`);
    }

    if (message.content.toLowerCase() === (`hmm`)) {
        message.channel.send(`hMMMMMMM`);
    }

    if (message.content === '<@550837323441373195> jail her') {
        message.channel.send(`${message.author} Ofcourse!`);
    }

    if (message.content === '<@550837323441373195> jail him') {
        message.channel.send(`${message.author} Ofcourse!`);
    }

    if (message.content === '<@550837323441373195> jail him pls') {
        message.channel.send(`${message.author} no u`);
    }

    if (message.content.toLowerCase().startsWith(`bores`)) {
        message.channel.send(`Did you mean **Bored**?\nPossible spelling mistake found\n\nGrammar nazi is here to save the day.`);
    }

    if (message.content.toLowerCase().startsWith(`i'm bores`)) {
        message.channel.send(`Did you mean **bored**?\nPossible spelling mistake found\n\nGrammar nazi is here to save the day.`);
    }

    if (message.content.toLowerCase().startsWith(`im bores`)) {
        message.channel.send(`Did you mean **bored**?\nPossible spelling mistake found\n\nGrammar nazi is here to save the day.`);
    }

    if (message.content === `nub`) {
        message.channel.send(`This sentence does not start with an uppercase letter\n\nGet your grammar straight.`);
    }

    if (message.content === `no u`) {
        message.channel.send(`This sentence does not start with an uppercase letter\n\nGet your grammar straight.`);
    }

    if (message.content === `ur mom`) {
        message.channel.send(`This sentence does not start with an uppercase letter\n\nGet your grammar straight.`);
    }

    if (message.content === `ur face`) {
        message.channel.send(`This sentence does not start with an uppercase letter\n\nGet your grammar straight.`);
    }

    if (message.content.toLowerCase() === (`wat`)) {
        message.channel.send(`${message.author} ????`);
    }

    if (message.content === '<@550837323441373195> ban') {
        message.channel.send(`Alright, get banned ${message.author}`);
    }

    if (message.content === '<@550837323441373195> ban me') {
        message.channel.send('B A N N E D');
    }

    if (message.content === '<@550837323441373195> frick off') {
        message.channel.send('Booo you suck');
    }

    if (message.content.toLowerCase().startsWith(`/website`)) {
        message.channel.send(`Oh I see, too lazy to open the browser and get to the website from there. I get it ;D\nHere, just click: https://strongcraft.org\nNo need to thank.
        `);
    }

    if (message.content.toLowerCase().startsWith(`/www`)) {
        message.channel.send(`Oh I see, too lazy to open the browser and get to the website from there. I get it ;D\nHere, just click: https://strongcraft.org\nNo need to thank.
        `);
    }

    if (message.content.toLowerCase().startsWith(`/topvoters`)) {
        message.channel.send(`Top voters of this month.\nHere, just click: https://www.strongcraft.org/voters.php\nNo need to thank.`);
    }

    if (message.content.toLowerCase().startsWith(`/tv`)) {
        message.channel.send(`Top voters of this month.\nHere, just click: https://www.strongcraft.org/voters.php\nNo need to thank.`);
    }

    if (message.content.toLowerCase() === (`fock u`)) {
        message.channel.send(`Did you mean **Rock**?\nPossible spelling mistake found\n\nHow could you life without me?`);
    }

    if (message.content.toLowerCase() === (`fock`)) {
        message.channel.send(`Did you mean **Rock**?\nPossible spelling mistake found\n\nHow could you life without me?`);
    }

    if (message.content.toLowerCase() === (`i luff you`)) {
        message.channel.send(`Did you mean **love**?\nPossible spelling mistake found\n\nHow could you life without me?`);
    }

    if (message.content.toLowerCase() === (`bc i luff u`)) {
        message.channel.send(`Did you mean **love**?\nPossible spelling mistake found\n\nHow could you life without me?`);
    }

    if (message.content.toLowerCase().startsWith(`luff it`)) {
        message.channel.send(`Did you mean **Love**?\nPossible spelling mistake found\n\nHow could you life without me?`);
    }

    if (message.content.toLowerCase().startsWith(`/reports`)) {
        message.channel.send(`Report them all https://www.strongcraft.org/reports.php`);
    }

    if (message.content.toLowerCase().startsWith(`/apply`)) {
        message.channel.send(`lol here https://www.strongcraft.org/applications.php even tho i bet you're not gonna do it\nAnd here's the list of people that made it, unlike you: https://www.strongcraft.org/forums/memberlist.php?mode=team`);
    }

    if (message.content.toLowerCase().startsWith(`/applications`)) {
        message.channel.send(`lol here https://www.strongcraft.org/applications.php even tho i bet you're not gonna do it\nAnd here's the list of people that made it, unlike you: https://www.strongcraft.org/forums/memberlist.php?mode=team`);
    }

    if(message.content.toLowerCase().startsWith("fruits")) {
    try {
        message.react('🍎');
        message.react('🍊');
        message.react('🍇');
        message.react('🍒');
        message.react('🍑');
        message.react('🍌');
        message.react('🍏');
        message.react('🍉');
        message.react('🍓');
        message.react('🍋');
        message.react('🍍');
    } catch (error) {
        console.error('One of the emojis failed to react.');
        }
    }

    if (message.content.toLowerCase().startsWith("fruit")) {
        try {
            message.react('🍎');
            message.react('🍊');
            message.react('🍇');
            message.react('🍒');
            message.react('🍑');
            message.react('🍌');
            message.react('🍏');
            message.react('🍉');
            message.react('🍓');
            message.react('🍋');
            message.react('🍍');
        } catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }

    // if(message.channel.type === "dm") {
    //     let DMlogEmbed = new Discord.RichEmbed()
    //     .setTimestamp()
    //     .setTitle("**__Direct Message to StrongCraft__**")
    //     .addField(`Sent By:`,`<@${message.author.id}>`)
    //     .setColor("RANDOM")
    //     .setThumbnail(message.author.displayAvatarURL)
    //     .addField(`Message: `, message.content)
    //     .setFooter(`DM Bot Messages | DM Logs`)
        
    //     bot.users.get("315577349192286228").send(DMlogEmbed)
    //   }

};
