const Discord = require("discord.js");

const quiz = [{
        q: "The capital of Georgia?",
        a: ["Tbilisi", "tbilisi"]
    },
    {
        q: "The capital of Lebanon?",
        a: ["Beirut", "beirut"]
    },
    {
        q: "The capital of Sweden?",
        a: ["Stockholm", "stockholm"]
    },
    {
        q: "The capital of Canada?",
        a: ["Ottawa", "ottawa"]
    },
    {
        q: "The capital of Australia?",
        a: ["Canberra", "canberra"]
    },
    {
        q: "The capital of Brazil?",
        a: ["Brasilia", "brasilia"]
    },
    {
        q: "The capital of Portugal?",
        a: ["Lisbon", "lisbon"]
    },
    {
        q: "The capital of Sudan?",
        a: ["Khartoum", "khartoum"]
    },
    {
        q: "The capital of Tunisia?",
        a: ["Tunisia", "tunisia"]
    }, 
    {
        q: "The capital of Egypt?",
        a: ["Cairo", "cairo"]
    },
    {
        q: "The capital of Italy?",
        a: ["Rome", "rome"]
    },
    {
        q: "The capital of Ukraine?",
        a: ["Kiev", "kiev"]
    },
    {
        q: "The capital of Norway?",
        a: ["Oslo", "oslo"]
    },
    {
        q: "The capital of Malta?",
        a: ["Valletta", "valletta"]
    },
    {
        q: "The capital of Turkey?",
        a: ["Ankara", "ankara"]
    },
    {
        q: "The capital of Macedonia?",
        a: ["Skopje", "skopje"]
    },
    {
        q: "The capital of Luxembourg?",
        a: ["Luxembourg", "luxembourg"]
    },
    {
        q: "The capital of Malaysia?",
        a: ["Kuala Lumpur", "kuala lumpur", "Kuala lumpur", "kuala Lumpur"]
    },
    {
        q: "The capital of Croatia?",
        a: ["Zagreb", "zagreb"]
    },
    {
        q: "The capital of Switzerland?",
        a: ["Bern", "bern"]
    },
    {
        q: "The capital of Cuba?",
        a: ["Havana", "havana"]
    },
    {
        q: "The capital of Dominica?",
        a: ["Roseau", "roseau"]
    },
    {
        q: "The capital of Dominican Republic?",
        a: ["Santo Domingo", "santo Domingo", "Santo domingo", "santo domingo"]
    },
    {
        q: "The capital of Belize?",
        a: ["Belmopan", "belmopan"]
    },
    {
        q: "The capital of Bahamas?",
        a: ["Nassau", "nassau"]
    },
    {
        q: "The capital of Colombia?",
        a: ["Bogota", "bogota"]
    },
    {
        q: "The capital of Ecuador?",
        a: ["Quito", "quito"]
    },
    {
        q: "The capital of Chile?",
        a: ["Santiago", "santiago"]
    },
    {
        q: "The capital of Argentina?",
        a: ["Buenos Aires", "buenos aires", "Buenos aires", "buenos Aires"]
    },
    {
        q: "The capital of New Zealand?",
        a: ["Wellington", "wellington"]
    },
    {
        q: "The capital of Nauru?",
        a: ["has no capital", "/", "none", "no one", "x", "Does not have one", "does not have one", "Has no capital"]
    },
    {
        q: "The capital of France?",
        a: ["Paris", "paris"]
    },
    {
        q: "The capital of Finland?",
        a: ["Helsinki", "helsinki"]
    },
    {
        q: "The capital of Germany?",
        a: ["Berlin", "berlin"]
    },
    {
        q: "The capital of Belgium?",
        a: ["Brussels", "brussels", "brussel", "Brussel"]
    },
    {
        q: "The capital of Cyprus?",
        a: ["Nicosia", "nicosia"]
    },
    {
        q: "The capital of The Netherlands?",
        a: ["Amsterdamn", "amsterdamn"]
    },
    {
        q: "The capital of Oman?",
        a: ["Masqat", "masqat"]
    },
    {
        q: "The capital of Denmark?",
        a: ["Copenhagen", "copenhagen"]
    },
    {
        q: "The capital of Kosovo?",
        a: ["Pristina", "pristina"]
    }
];
const options = {
    max: 1,
    time: 30050,
    errors: ["time"],
};

module.exports.run = async (bot, message, args) => {

    message.delete();
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    await message.channel.send(item.q);
    try {
        const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
        const winnerMessage = collected.first();
        return message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                .setFooter(`Question: ${item.q}`)
                .setColor(message.guild.me.displayHexColor)
        })
    } catch (_) {
        return message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor('No one got the answer in time!')
                .setTitle(`Correct Answer(s): \`${item.a}\``)
                .setFooter(`Question: ${item.q}`)
        })
    }
}
module.exports.help = {
    name: "capitals",
    aliases: [],
}