import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'π» ππ§ππ²ππ¨π­ π©π¨π« ππ§ππ²π¦π«π₯π’π­ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}ππ ππ πππΏπ πππΎπππππΌπ ππ πΌππΏππ/πππΏππ. πππππππ πΎππ ππππ ππππ½ππ π ππππππ\n\nπππ πΌππΏππ/πππΏππ πΎππππΏ πππ π½π πππππΏ. πππ πΌππππππ ππΌππ ππ πππππ`
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*

ΰ¦ *TΓTULO | TITLE*
Β» ${title}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DESCRIPCIΓN | DESCRIPTION*
Β» ${description}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *PUBLICADO | PUBLISHED*
Β» ${publishedTime}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *DURACION | DURATION*
Β» ${durationH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *VISTAS| VIEWS*
Β» ${viewH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ *URL*
Β» ${url}

*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*`, thumbnail, [['π  π π‘ π¨ βοΈ', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' π‘ π§ππ£π’π¦ ππ πππ¦πππ₯πππ¦ ' + fin,
rows: [
{title: "π  π π¨ π π π’ (Opcion 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "π  π π¨ π π π’ (Opcion 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "π  π π¨ π π π’   π π’ π", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’ (Opcion 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’ (Opcion 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’   π π’ π", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' π ππ¨π¦π€π¨πππ ππ©ππ‘π­πππ ' + fin,
rows: [
{title: "π  π  π π¦   π₯ π π¦ π¨ π π§ π π π’ π¦", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*πππππΌ πππ ππΌ ππΌπΎππ πΎππ  ${text}*`,
  footer: global.wm,
  title: `${htki} *β»οΈ πΏπππΎπΌπππΌπ* ${htka}`,
  buttonText: `π πππππππ π`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `ΰ¦ *TΓTULO | TITLE:* ${title}\nΰ¦ *PUBLICADO | PUBLISHED:* ${published}\nΰ¦ *VISTAS| VIEWS:* ${views}\nΰ¦ *URL:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'π  π  π π¦   π₯ π π¦ π¨ π π§ π π π’ π¦'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*α΄Ι΄α΄ Ιͺα΄Ι΄α΄α΄ α΄α΄α΄Ιͺα΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw 'β°β±ββ± *ππΌπππΜ | πππππ* β±ββ±β?\n\n ERROR, SERVIDOR CAIDO, INTENTA DEL NUEVO POR FAVOR'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.limit = 1
handler.level = 2
export default handler
