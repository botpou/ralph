let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' š', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'š» š¦šš½š²šæ š¼š£šš®š¢š - šŖšµš®šššš½š½ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]  

let texto0 = `${ag}šš š¾ššš¼šæšš(š¼) šš¼ ššššššššššæš šššš¼ šššš¾ššš šæš ššššššš¼š šš š½šš ššššššš¼šššššš š¼ šššššš šššššš¼ šš¼š šš¼ššæš š ššš šš¼ šššš¾ššš *${usedPrefix}serbot*\n\nšš š¾ššš¼ššš šš¼š ššššššš¾šššæ šššš šššš¾šššš šš šššššššš ššš š½šš ššššššš¼šššš šš šššššš š¾ššš š½š¼š¾š šš¼ššš šš ššš ššš šššš¾šššš *${usedPrefix}jadibot*`
let texto1 = `${mg}ššš šš š¾ššš¼ššæš š¾ššš šššš ššššššš\n*${usedPrefix + command} enlace de Grupo y NĆŗmero de Token(s)*\n*${usedPrefix + command} ${grupos.getRandom()} 3*\n\n*3* ššššš šŖ = *30* ššššššš\n\nššš ššš š¾šššš¼ššæ šššš šššš ššš¼šššš\n*${usedPrefix + command} ${grupos.getRandom()} 3*\n\n*3* šššššš šŖ = *30* ššššššš`
let texto2 = `${ag}Ā”šš¼ šš šššššš šššššš! šŖ\n\nš¾ššššš¼ šššššš šš¼šš¼ šššæšš šššš šš¼šš¼š½šš š¼ šš ššššš š¾šš šš š¾ššš¼ššæš:\n*${usedPrefix}buy joincount 3*\n\nššš šš šššššš šš¼šš šššššš! šŖ\n\nš½šš šššššš šš š½š š¼š½šš šš šššššš šš¼šš¼š½šš šš šššš ššššš šššš ššš š¾šššš¼ššæ *${usedPrefix}buy joincount 3*`
let texto3 = `${fg}šššš¼š¾š šš šš¼šššæš. šæšš½š ššš šššš¼š¾š šæš ššššš šæš ššš¼ššš¼šš\n*${usedPrefix + command} ${grupos.getRandom()} 3*\n\nšššš¼šššæ šššš. šššš š½š ššš¼ššš¼šš ššššš šššš\n*${usedPrefix + command} ${grupos.getRandom()} 3*`
let texto4 = `${mg}ššššššš šš šššššš šæš ššššš(š)\n*3* ššššš šŖ = *30* ššššššš\n\nššššš ššš šššš½šš šš šššššš\n*3* šššššš šŖ = *30* ššššššš`
let texto5 = `${fg}šššššš *3* ššššš(š) šš¼šš¼ šššæšš šššš š¼ šš¼šš¼š½šš\n\nššššššš *3* šššššš šš š½š š¼š½šš šš šššš šš¼šš¼š½šš`
let texto6 = `${fg}šš¼šššš *3* ššššš(š) šš¼šš¼ šššæšš šššš š¼ šš¼šš¼š½šš\n\nšš¼ššššš *3* šššššš šš š½š š¼š½šš šš šššš šš¼šš¼š½šš`
let texto7 = `${eg}š» šš šš¼ ššššæš šš¼šš¼š½šš š¼š ššššš!!!\n\nšš¼šš¼š½šš šš¼š ššššššæ ššš ššššš!!!`

let img1 = 'https://img.freepik.com/vector-premium/animacion-monedas-pixeles-imagenes-animacion-moneda-oro-ilustracion-vectorial_350225-3.jpg?w=2000'
let img2 ='https://img.freepik.com/premium-vector/set-8bit-pixel-graphics-icons-game-art-coins-gold-animation_534389-12.jpg?w=2000'

if (!global.db.data.settings[conn.user.jid].temporal) return conn.sendButton( m.chat, wm, texto0, null, [[`š ššššš¾ššš¼š š¾ššš¼ššæš`, `.reporte *Quiero unir a GataBot en mĆ­ Grupo. Por favor Active la funciĆ³n #botemporal*`], [`š š š š š`, `.menu`]], fkontak, m) 

if (!args[0]) return conn.sendButton( m.chat, wm, texto1, null, [[`š š š š š`, `.menu`]], fkontak, m)
let [_, code] = args[0].match(linkRegex) || []

if (!linkRegex.test(args[0])) return conn.sendButton( m.chat, wm, texto3, null, [[`š š š š š`, `.menu`]], fkontak, m)
let user = db.data.users[m.sender]

if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y NĆŗmero de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN šŖ = 30 MINUTOS*`
//if (!linkRegex.test(args[0])) throw `${fg}šššš¼š¾š šš šš¼šššæš.` //AquĆ­ 
if (user.joincount <= 1) return conn.sendButton( m.chat, wm, texto2, img1, [[`šŖ š¾ššššš¼š : š½šš 3 ${rpgshopp.emoticon('joincount')}`, `.buy joincount 3`]], fkontak, m)
if (isNaN(args[1])) return conn.sendButton( m.chat, wm, texto4, img1, [[`š š š š š`, `.menu`]], fkontak, m)
if (args[1] < 3) return conn.sendButton( m.chat, wm, texto5, img2, [[`š š š š š`, `.menu`]], fkontak, m)
if (args[1] > 3) return conn.sendButton( m.chat, wm, texto6, img2, [[`š š š š š`, `.menu`]], fkontak, m) //Solo ingresarĆ” si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code)
await conn.sendButton( m.chat, texto7, `${await conn.getName(res)} | ` + wm, null, [[`š š š š š`, `.menu`]], fkontak, m).then(async() => { 
user.joincount -= args[1] 
var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
var now = new Date() * 1
 
if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.sendButton( m.chat, wm, `ā šš šš¼ ššššæš š¼š ššššš!!!\n${await conn.getName(res)}\n\nššš¾ššššæš ššš šš ā³ ššššššš¼š, ššš šš š¾ššš¼ššæš *${usedPrefix}menu* šš¼šš¼ ššš šš šššš\n\nšŖ šš šš¼ššæšš š¼ššššš¼ššš¾š¼ššššš šš:\n${msToDate(global.db.data.chats[res].expired - now)}\n\n*${username}* šš ššššæš¼ *${user.joincount}* ššššš(š)šŖ\n\nā ššššæš ššš¼š šš š¾ššš¼ššæš *${usedPrefix + command}* šš¼šš½ššš šš šš ššššš ššššššš¼š šššš šš\n\nā\n*${usedPrefix + command}*\n\nā šš¼šš¼ ššš¼ ššššš ššššššššš¾šš¼, šæšš½š šæš ššš š¼šæššš\n\nā šš š¾š¼šš ššš šš š¼šæššš šš ššššššš šæšš ššššš š šššššš¼ ššš šššššš¼ šš šš šš¼ šššæšš`, null, [[`+30 ššššššš šš ššššš`, `${usedPrefix + command} ${args[0]} 3`], [`š š š š š`, `.menu`]], fkontak, m)
await conn.sendButton( m.chat, botdate, `${igfg} šš šš š½šš šæš ššš¼ššš¼šš ššš šš š¼šššæš¼šš¼ ššš¼šššš¼š šæššššššššš š¼š¾šššššæš¼šæšš šŖ š¼š ššššš¼šæš š ššššš š šš¼šš½ššš šš šš¼š š¼ šæššššššš š š¾šš ššš ššššššššš šššš¾ššššš, šæššššššš¼ šæš šš¼šš¼š½šš!!! šø\n\nš šš¼šš¼š½šš ššš šššššš¼šæš¼ ššš:\n*${username}*`, gata.getRandom(), [[`š šššš š¾ššššššš`, `.allmenu`]], fkontak, m)
//for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//let data = (await conn.onWhatsApp(jid))[0] || {}
  //if (data.exists) 
    //conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarĆ” a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*Ā”YA NO TIENES TOKENS! šŖ*\n\n*COMPRA TOKENS PARA PODER INVITAR A GATABOT A TĆ GRUPO CON EL COMANDO *${usedPrefix}buy joincount 3 o ${usedPrefix}buy Para ver la Tienda*`
 if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y NĆŗmero de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN šŖ = 30 MINUTOS*`
if (!linkRegex.test(args[0])) throw `${fg}šššš¼š¾š šš šš¼šššæš.` //AquĆ­ 

let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}š» *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => { //Si el Owner se une al Grupo no habrĆ” temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `ā SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES ā³ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENĆ*\n\nšŖ *ME SALDRĆ AUTOMĆTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) šŖ*\n\nā *PUEDE USAR EL COMANDO TAMBIĆN EN GRUPO MIENTRAS ESTE YO*\n\nā *SI QUIERE QUE ESTE POR MĆS TIEMPO AUMENTE EL NĆMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\nā *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA NO SE VA PODER*`, m)  
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARĆ A REALIZAR DIFERENTES ACTIVIDADES šŖ AL PRIVADO O GRUPO Y TAMBIĆN TE VAS A DIVERTIR š CON SUS MULTIPLES FUNCIONES, DISFRUTA DE GATABOT!!! šø*\n\nš *GATABOT FUE INVITADA POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarĆ” a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creadora', `/creadora`], ['šš¤š”š«šš§ šš” ššš£šŖĢ | š½ššš  š©š¤ ššš£šŖ āļø', '/menu']], m, res) })}
} catch (e) {
await conn.reply(m.chat, `${fg}\`\`\`POSIBLES CAUSAS
- El enlace esta incorrecto o caducado.

- No me puedo unir si previamente me han eliminado del Grupo.

- El Grupo esta Lleno, por ende no puedo unirme.
\`\`\``, m)
console.log(e)}
}
handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd']
export default handler

function msToDate(ms) {
let temp = ms
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " *DĆ­a(s)* āļø\n" + hours + " *Hora(s)* ā³\n" + minutes + " *Minuto(s)* ā°\n" + sec + " *Segundo(s)* š\n";
}
