import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) { 
await delay(5 * 5000)
conn.sendButton(id, `*β­ββ[ πΎππππππΎπΌπΏπ | πππππΎπ ]ββββ¬£*\n*β*\n*βπ* ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`, 'β *πΎππππππΎπΌπΏπ ππππΎππΌπ*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentasgb'],['π πππ£πͺ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'ππ‘ππ¬-π π | π π₯πππ',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/andy_mr_lit`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} β *El mensaje fue enviado a ${chatsall.length} Chats Totales*\n*Es posible que no se haya enviado a todos los Chats Totales. Disculpe.*\n\nβ *The message was sent to ${chatsall.length} Totals Chats*\n*May not have been sent to all Totals Chats. Excuse me.*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i
handler.rowner = true
handler.exp = 500
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
