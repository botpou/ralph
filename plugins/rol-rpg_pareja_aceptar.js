import fetch from 'node-fetch' 
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' š', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'š» š¦šš½š²šæ š¼š£šš®šš¤š© - šŖšµš®šššš½š½ ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}šššššššš š šššššššæš š¼š ššššš¼šš šæš šš¼ ššššššš¼ ššš šššššš ššš ššš¼ šš šš¼šššš¼\n\nšš¼š šš ššššš šš ššš ššššš¼šš šššš ššš šššššš ššš šš¼šš šš š½š šššš šš¼ššššš`, wm, null, [
['š  š š” šØ āļø', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.sendButton(m.chat, `${fg}šš šš ššš¾ššššš š¼ šš¼ ššššššš¼, šæšš½š šæš šššš¼š šš šššš ššššš\n\nššš šššššš šš¼š ššš šššššæ, šššš šššš š½š šš šššš ššššš`, wm, null, [
['š  š š” šØ āļø', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}šššššæ ššššš šš ššššæš ššš šš¼šššš¼\n\nššš šššššššš š¾š¼šššš š½š š¼ šš¼ššššš`, wm, null, [
['š  š š” šØ āļø', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}šš šš ššššæš ššš šš šš¼šššš¼ š¹\n\nšššš šš ššš š¾š¼šššš š½š š¼ š¾ššššš`, wm, null, [
['š  š š” šØ āļø', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.sendButton(m.chat, `šš ššššæšš š¼š¾šššš¼š šš šš¼šæšš šš šš¼ šæšš¾šš¼šš¼šæš, šæšš¾šš¼šš¼šš š¾šš *${tu}* šš¼šš¼ ššš šæššš¼ šš šš š¼š¾šššš¼ š šš ššš¾šš¼šš¼\n\nššš š¾š¼šššš š¼š¾š¾ššš šš ššš½ššæš šš¼š šæšš¾šš¼šššæ, šæšš¾šš¼šš šššš *${tu}* šš šš¼š šš ššš š¼š¾š¾ššš šš ššššš¾š ššš`, wm, null, [
['š  š š” šØ āļø', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
	
}else{
global.db.data.users[m.sender].pasangan = user
return await conn.sendButton(m.chat, `š„³š» ššššš¾ššš¼š¾ššššš!!! *${tu}*\nā šæš šš¼šššš¼ šššš¾šš¼š šššš¼š šš ššš¼ šššš¼š¾ššš\n\nššš šæššš ššš ššššššš šš š¼ššš š ššššš¾ššæš¼šæ šš\n\nš ššššš¾šš¼ššš šššš š¼šš šš š¼ šššš¼šššššššš`, `*${tu} š ${yo}*\n` + wm, img5, [
['š  š š” šØ āļø', '/menu']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(aceptar|acepto|accept)$/i
handler.group = true
export default handler
