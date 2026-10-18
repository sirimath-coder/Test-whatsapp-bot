const config = require('../settings')
const { cmd } = require('../lib/command')

// 😻 𝐀 + ᴀ Font Logic
function fancy(text) {
    const small = {
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
    };
    const bold = {
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
        'a': '𝐀', 'b': '𝐁', 'c': '𝐂', 'd': '𝐃', 'e': '𝐄', 'f': '𝐅', 'g': '𝐆', 'h': '𝐇', 'i': '𝐈', 'j': '𝐉', 'k': '𝐊', 'l': '𝐋', 'm': '𝐌', 'n': '𝐍', 'o': '𝐎', 'p': '𝐏', 'q': '𝐐', 'r': '𝐑', 's': '𝐒', 't': '𝐓', 'u': '𝐔', 'v': '𝐕', 'w': '𝐖', 'x': '𝐗', 'y': '𝐘', 'z': '𝐙'
    };
    return text.split(' ').map(word => {
        if (!word) return '';
        let first = bold[word[0].toUpperCase()] || word[0];
        let rest = word.slice(1).split('').map(c => small[c.toLowerCase()] || small[c.toUpperCase()] || c).join('');
        return first + rest;
    }).join(' ');
}

cmd({
    pattern: "ping",
    alias: ["speed","pong"],
    react: "⚡",
    desc: "Check bot ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m, { from, reply }) => {
try{
    const start = new Date().getTime()

    // 1st Animation Message
    let msg = await conn.sendMessage(from, { text: `*⚡ ${fancy('Pinging')}...*` }, { quoted: mek })

    await new Promise(r => setTimeout(r, 600))
    await conn.sendMessage(from, { text: `*⚡ ${fancy('Pinging')}... ▰▱▱▱ 20%*` , edit: msg.key })
    
    await new Promise(r => setTimeout(r, 600))
    await conn.sendMessage(from, { text: `*🚀 ${fancy('Connecting To Sirimath Server')}... ▰▰▰▱▱ 60%*` , edit: msg.key })

    await new Promise(r => setTimeout(r, 700))
    await conn.sendMessage(from, { text: `*💫 ${fancy('Calculating Speed')}... ▰▰▰▰▰ 100%*` , edit: msg.key })

    const end = new Date().getTime()
    const ping = end - start

    let speedStatus = ""
    if(ping < 150) speedStatus = "🟢 𝐒ᴜᴘᴇʀ 𝐅ᴀsᴛ | 𝐄xᴛʀᴇᴍᴇ ⚡"
    else if(ping < 300) speedStatus = "🟡 𝐅ᴀsᴛ | 𝐆ᴏᴏᴅ 🚀"
    else speedStatus = "🔴 𝐒ʟᴏᴡ | 𝐏ᴏᴏʀ 🐢"

    let dec = `
╭──〔 ⚡ 𝐒ɪʀɪᴍᴀᴛʜ 𝐏ɪɴɢ 〕──╮
┃
┃ 😻 ${fancy('Bot')} : 𝐒ɪʀɪᴍᴀᴛʜ 𝐌ᴅ
┃ 👑 ${fancy('Owner')} : 𝐒ɪʀɪᴍᴀᴛʜ 🩵
┃
┃ 🚀 ${fancy('Speed')} : *${ping} ms*
┃ 📊 ${fancy('Status')} : ${speedStatus}
┃ ⏰ ${fancy('Uptime')} : ${Math.floor(process.uptime() / 3600)}H ${Math.floor((process.uptime() % 3600) / 60)}M
┃
╰───────────────╯

> ${fancy('Powered By Sirimath')} 😻🩵
`

    await conn.sendMessage(from, { text: dec , edit: msg.key })

} catch (e) {
    console.log(e)
    reply(`❌ ${fancy('Error')} : ${e}`)
}
})
