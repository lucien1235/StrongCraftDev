module.exports.run = (bot, message, args) => {
    if (!args[0]) return message.channel.send("𝕤𝕒𝕪 𝕤𝕠𝕞𝕖𝕥𝕙𝕚𝕟𝕘")

    let fancytxt = args.join(" ")

    const MAP = {
        '+': '⊕',
        '-': '⊖',
        '×': '⊗',
        '÷': '⨸',
        '/': '⊘',
        '?': '‽',

        A: '𝔸',
        B: '𝔹',
        C: 'ℂ',
        D: '𝔻',
        E: '𝔼',
        F: '𝔽',
        G: '𝔾',
        H: 'ℍ',
        I: '𝕀',
        J: '𝕁',
        K: '𝕂',
        L: '𝕃',
        M: '𝕄',
        N: 'ℕ',
        O: '𝕆',
        P: 'ℙ',
        Q: 'ℚ',
        R: 'ℝ',
        S: '𝕊',
        T: '𝕋',
        U: '𝕌',
        V: '𝕍',
        W: '𝕎',
        X: '𝕏',
        Y: '𝕐',
        Z: 'ℤ',
        a: '𝕒',
        b: '𝕓',
        c: '𝕔',
        d: '𝕕',
        e: '𝕖',
        f: '𝕗',
        g: '𝕘',
        h: '𝕙',
        i: '𝕚',
        j: '𝕛',
        k: '𝕜',
        l: '𝕝',
        m: '𝕞',
        n: '𝕟',
        o: '𝕠',
        p: '𝕡',
        q: '𝕢',
        r: '𝕣',
        s: '𝕤',
        t: '𝕥',
        u: '𝕦',
        v: '𝕧',
        w: '𝕨',
        x: '𝕩',
        y: '𝕪',
        z: '𝕫',
        0: '𝟶',
        1: '𝟷',
        2: '𝟸',
        3: '𝟹',
        4: '𝟺',
        5: '𝟻',
        6: '𝟼',
        7: '𝟽',
        8: '𝟾',
        9: '𝟿',

        ' ': '',
    };

    message.channel.send(fancytxt.split('').map(c => (MAP[c] || c)).join(''))
}

module.exports.help = {
    name: "fancy",
    aliases: [""],
}