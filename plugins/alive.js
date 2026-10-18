const config = require('../settings')
const os = require('os')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

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
        if (word.length === 0) return '';
        let first = bold[word[0].toUpperCase()] || word[0];
        let rest = word.slice(1).split('').map(c => small[c.toLowerCase()] || small[c.toUpperCase()] || c).join('');
        return first + rest;
    }).join(' ');
}

cmd({
    pattern: "alive1",
    react: "😻",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1️⃣", rowId: prefix + 'MENU' , description: `📜 ${fancy('Commands Menu')}`},
	    {title: "2️⃣", rowId: prefix + 'PING' , description: `⚡ ${fancy('Bots Speed')}`},

	]
    } 
]
const listMessage = {
  caption: `${monspace}👋 ${fancy('Hello')} ${pushname} 😻 ${fancy("I'm Alive Now")} 🩵${monspace}
    
╭─〔 🚀 𝐒ɪʀɪᴍᴀᴛʜ 〕─╮
┃
┃ 👑 ${fancy('Owner')} : 𝐒ɪʀɪᴍᴀᴛʜ 🩵
┃ 🤖 ${fancy('Bot Name')} : 𝐒ɪʀɪᴍᴀᴛʜ 😻
┃ 🚀 ${fancy('Version')} : ${require("../package.json").version}
┃ 💾 ${fancy('Memory')} : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem() / 1024 / 1024)}MB
┃ ⏰ ${fancy('Runtime')} : ${runtime(process.uptime())}
┃ 🌐 ${fancy('Platform')} : ${os.hostname()} ✨
┃
╰───────────────╯

> ✨ ${fancy('Hello Im Sirimath Md Whatsapp User Bot This Is A Hard Working Project Of Our Team And Its Strictly Forbidden To Own Anything Here Without Permission')} 😻🩵
              
🐼 ${fancy('Have A Nice Day')} 🌸`,
  image : { url : config.LOGO} ,
  footer: `© ${fancy('Powered By')} 𝐒ɪʀɪᴍᴀᴛʜ 😻`,
  buttonText: `🔢 ${fancy('Reply Below Number')} 👇`,
  sections,
  contextInfo: {
				externalAdReply: { 
					title: '𝐒ɪʀɪᴍᴀᴛʜ 𝐌ᴅ 🩵😻',
					body: `${fancy('An User Bot For Whatsapp')} ✨`,
					mediaType: 1,
					sourceUrl: "" ,
                    thumbnailUrl: 'https://i.ibb.co/Jj3HpNX7/c36397d1055f9e75.jpg' ,
					renderLargerThumbnail: false,
                    showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1️⃣", rowId: prefix + 'menu' , description: `📜 ${fancy('Commands Menu')} 😻`},
	    {title: "2️⃣", rowId: prefix + 'ping' , description: `⚡ ${fancy("Bot's Speed")} 🚀`} ,

	]
    } 
]
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: `© 𝐒ɪʀɪᴍᴀᴛʜ 🩵`,
  buttonText: `🔢 ${fancy('Reply Below Number')} 👇`,
  sections,
  contextInfo: {
				externalAdReply: { 
					title: '𝐒ɪʀɪᴍᴀᴛʜ 🍭😻',
					body: `${fancy('An User Bot For Whatsapp')} 🩵`,
					mediaType: 1,
					sourceUrl: "" ,
                    thumbnailUrl: 'https://i.ibb.co/Jj3HpNX7/c36397d1055f9e75.jpg' ,
					renderLargerThumbnail: false,
                    showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : msg })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})
