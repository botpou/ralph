import fs from 'fs'
function handler(m, { conn }) {
let vn = './media/mmm.mp3'
let text = `
*๐พ๐ค๐ฃ๐ฉ๐๐๐ฉ๐ค* 
*Wa.me/14036687826 (no bot)*
*Wa.me/14036687826 (Bot)*
*Wa.me/14036687826 (Botยฒ)*
*Wa.me/50941411147 (botยณ)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐ผ๐ฃ๐๐ฎ๐๐',
body: '๐๐ซ๐๐๐๐จ๐ซ',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/14036687826`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `๐งก *Eso son los contactos para ti.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/DSjOomRaTkU4z1a5ngl2Yw', 'grupos', null, null, [
['๐ ๐๐ฃ๐๐ค๐ง๐ข๐๐๐รณ๐ฃ', '.infobot'],
['๐ ๐ฟ๐ค๐ฃ๐๐ง', '.donar'],
['โ ๐๐ง ๐๐ก ๐๐ฃ๐๐๐๐ค', '/menu']
], m,)
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueรฑo|dueรฑa|propietaria|dueรฑo|creadora|creador)$/i
export default handler