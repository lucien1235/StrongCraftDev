const request = require('request');

module.exports.run = (bot, message, send) => {
    let cn = request("http://api.adviceslip.com/advice", function(err, res, body) {
        try {
            let cnj = JSON.parse(body)
            message.delete();
            message.reply(cnj.slip.advice);
        } catch (e) {
            return send("**Advice machine :b:roke**")
        }
    });
}
module.exports.help = {
    name: "advice",
    aliases: [],
}