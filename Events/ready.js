module.exports = bot => {
    console.log(`\n${bot.user.username} is online on ${bot.guilds.size} server(s) and is watching ${bot.users.size} user(s)!`);
    bot.user.setStatus('online');
    bot.user.setActivity(`you and ${bot.users.size} players.`, {type: "WATCHING"});

};
