module.exports = async (bot, guild) => {

    const invite = await guild.channels.first().createInvite({
        maxAge: 0
      });
      console.log(`I joined a new guild named: ${guild.name} at ${new Date()} with invite: https://discord.gg/${invite.code}`)
};