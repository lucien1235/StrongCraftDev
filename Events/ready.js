module.exports = bot => {
    console.log(`\n${bot.user.username} is online on ${bot.guilds.size} server(s) and is watching ${bot.users.size} user(s)!`);
    bot.user.setStatus('dnd');
    bot.user.setActivity(`Work in progress...`, {type: "PLAYING"});

};