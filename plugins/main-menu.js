const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

// 𝐀 + ᴀ Font Logic
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
        let rest = word.slice(1).split('').map(c => small[c] || c).join('');
        return first + rest;
    }).join(' ');
}

cmd({
    pattern: "menu2",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "😻",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭──〔 🚀 ${config.BOT_NAME} 〕──╮
┃
┃ 👑 ${fancy('Owner')} : 𝐒ɪʀɪᴍᴀᴛʜ
┃ 🤖 ${fancy('Bot Name')} : ${config.BOT_NAME}
┃ ⚙️ ${fancy('Prefix')} : [${config.PREFIX}]
┃ 🌐 ${fancy('Platform')} : 𝐇ᴇʀᴏᴋᴜ
┃ 📦 ${fancy('Version')} : 4.0.0
┃ ⏰ ${fancy('Runtime')} : ${runtime(process.uptime())}
┃ 👤 ${fancy('User')} : ${pushname}
┃
╰───────────────╯

╭━━━〔 📥 ${fancy('Download Menu')} 〕━━━┈⊷
┃◈╭───────────·๏
┃◈┃• 🟦 ${fancy('Facebook')} : ${config.PREFIX}ғᴀᴄᴇʙᴏᴏᴋ
┃◈┃• ☁️ ${fancy('Mediafire')} : ${config.PREFIX}ᴍᴇᴅɪᴀғɪʀᴇ
┃◈┃• 🎵 ${fancy('Tiktok')} : ${config.PREFIX}ᴛɪᴋᴛᴏᴋ
┃◈┃• 🐦 ${fancy('Twitter')} : ${config.PREFIX}ᴛᴡɪᴛᴛᴇʀ
┃◈┃• 📷 ${fancy('Insta')} : ${config.PREFIX}ɪɴsᴛᴀ
┃◈┃• 📦 ${fancy('Apk')} : ${config.PREFIX}ᴀᴘᴋ
┃◈┃• 🎧 ${fancy('Play')} : ${config.PREFIX}ᴘʟᴀʏ
┃◈┃• 🎶 ${fancy('Song')} : ${config.PREFIX}sᴏɴɢ
┃◈┃• 🎬 ${fancy('Video')} : ${config.PREFIX}ᴠɪᴅᴇᴏ
┃◈┃• 🎵 ${fancy('Ytmp3')} : ${config.PREFIX}ʏᴛᴍᴘ3
┃◈┃• 📹 ${fancy('Ytmp4')} : ${config.PREFIX}ʏᴛᴍᴘ4
┃◈┃• ☁️ ${fancy('Gdrive')} : ${config.PREFIX}ɢᴅʀɪᴠᴇ
┃◈╰───────────┈⊷
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 👥 ${fancy('Group Menu')} 〕━━━┈⊷
┃◈╭───────────·๏
┃◈┃• 🔗 ${fancy('Grouplink')}
┃◈┃• ➕ ${fancy('Add')} | ➖ ${fancy('Remove')}
┃◈┃• 👢 ${fancy('Kick')} | ⬆️ ${fancy('Promote')}
┃◈┃• 👋 ${fancy('Setwelcome')} | ${fancy('Setgoodbye')}
┃◈┃• 🔇 ${fancy('Mute')} | 🔊 ${fancy('Unmute')}
┃◈┃• 🔒 ${fancy('Lockgc')} | 🔓 ${fancy('Unlockgc')}
┃◈┃• 🏷️ ${fancy('Tagall')} | ${fancy('Hidetag')}
┃◈╰───────────┈⊷
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 🤖 ${fancy('Ai Menu')} 〕━━━┈⊷
┃◈╭───────────·๏
┃◈┃• 🧠 ${fancy('Ai')} | 💫 ${fancy('Gpt4')}
┃◈┃• 🔵 ${fancy('Meta')} | 📦 ${fancy('Blackbox')}
┃◈┃• 🎨 ${fancy('Imagine')} | 🎨 ${fancy('Imagine2')}
┃◈╰───────────┈⊷
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 🎭 ${fancy('Reaction Menu')} 〕━━━┈⊷
┃◈╭───────────·๏
┃◈┃• 🤗 ${fancy('Hug')} | 😘 ${fancy('Kiss')}
┃◈┃• 🥰 ${fancy('Cuddle')} | 😊 ${fancy('Smile')}
┃◈┃• 👊 ${fancy('Bully')} | 🔨 ${fancy('Bonk')}
┃◈╰───────────┈⊷
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 🎨 ${fancy('Logo Maker')} 〕━━━┈⊷
┃◈╭───────────·๏
┃◈┃• 💡 ${fancy('Neonlight')} | 🎀 ${fancy('Blackpink')}
┃◈┃• 🐉 ${fancy('Dragonball')} | 🍥 ${fancy('Naruto')}
┃◈┃• 🌌 ${fancy('Galaxy')} | 🌇 ${fancy('Sunset')}
┃◈┃• 💻 ${fancy('Hacker')} | 😈 ${fancy('Devilwings')}
┃◈┃• 🎂 ${fancy('Birthday')} | 🐻 ${fancy('Bear')}
┃◈╰───────────┈⊷
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 ⚡ ${fancy('Main Menu')} 〕━━━┈⊷
┃◈╭───────────·๏
┃◈┃• 🏓 ${fancy('Ping')} | 🚀 ${fancy('Speed')}
┃◈┃• 💚 ${fancy('Alive')} | ⏱️ ${fancy('Runtime')}
┃◈┃• 📦 ${fancy('Repo')} | 👑 ${fancy('Owner')}
┃◈╰───────────┈⊷
╰━━━━━━━━━━━━━━━┈⊷

> ${config.DESCRIPTION}
`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/bjPrbF84/3174.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363400734168271@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYT36/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ ${fancy('Error')} : ${e}`);
    }
});
