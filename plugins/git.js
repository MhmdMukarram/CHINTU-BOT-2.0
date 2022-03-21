let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://i.ibb.co/N95Zqw4/logo.jpg")).buffer(), devil, 'ᴄʜɪɴᴛᴜ ʙᴏᴛ ʙʏ ༒︎𝚁𝙴𝙳 𝙰𝙻𝙿𝙷𝙰༒︎\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/MhmdMukarram/CHINTU-BOT-2.0 \n\n\ © ᴄʜɪɴᴛᴜ ʙᴏᴛ⁩' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
