let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}šššššššš š¼ š¼šššššš šš¼šš¼ šæššš½š¼ššš¼š\nššššššš\n*${usedPrefix + command} @tag*\n\nšš¼š ššššššš šš ššš½š¼š\nššš¼šššš\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}šššššššš š¼ š¼šššššš šš¼šš¼ šæššš½š¼ššš¼š\nššššššš\n*${usedPrefix + command} @tag*\n\nšš¼š ššššššš šš ššš½š¼š\nššš¼šššš\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}šš/šš¼ šššš¼ššš(š¼) ššš šæššš½š¼ššš¼šæš(š¼) š¤©\nšššæšš¼ ššš¼š š¼ ${gt}\n\nššš šššš šš¼š ššš½š¼š š¤ \nššš š¼š£šš®ššæ`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
