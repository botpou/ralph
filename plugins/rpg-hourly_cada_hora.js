import fetch from 'node-fetch'
let handler = async (m, { isPrems, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' š', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'š» š¦šš½š²šæ š¼š£šš®šš¼š-š š - šŖšµš®šššš½š½ ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

let user = global.db.data.users[m.sender]
let premium = user.premium

let botol = `${pickRandom([1, 1, 2, 3, 3, 0, 0])}` * 1
let botolpremium = `${pickRandom([3, 3, 7, 7, 5, 5])}` * 1
	
let batu = `${pickRandom([2, 2, 1, 1, 1, 1, 3])}` * 1
let batupremium = `${pickRandom([4, 4, 3, 7, 7, 5])}` * 1

let potion = `${pickRandom([1, 2, 3, 4, 5])}` * 1
let potionpremium = `${pickRandom([2, 4, 6, 9, 12])}` * 1

let common = `${pickRandom([1, 0, 0, 2, 0, 1, 1, 1])}` * 1
let commonpremium = `${pickRandom([2, 2, 1, 3, 4])}` * 1
 
const recompensas = {
  botol: premium ? botolpremium : botol,
  batu: premium ? batupremium : batu,
  common: premium ? commonpremium : common,
}

let time = user.lasthourly + 3600000 //1 Hora //3600000
if (new Date - user.lasthourly < 3600000) return await conn.sendButton(m.chat, `šš¼ ššš¾šš½šššš šš šššššš¼ šæš š¾š¼šæš¼ šššš¼ ā»ļø\nšššššš šš *${msToTime(time - new Date())}* šš¼šš¼ ššš¾šš½šš šššš¼ ššššššš¼\n\nššš š¼šššš¼šæš ššš¾šššššæ šššš šššššš šæššššššš ā»ļø\nš¾ššš š½š¼š¾š šš *${msToTime(time - new Date())}* šš ššš¾šššš š¼šššššš šæššššššš`, wm, null, [['š  š š” šØ āļø', '/menu']], fkontak, m)
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n`}
let text = `
ā­āāšāšāšāāā¬£
ā ā»ļø ššššššš¼ š¾š¼šæš¼ šššš¼!!
ā ā»ļø šššššš šæššššššš!!
ā *${premium ? 'šļø Recompensa Premium' : 'š Recompensa Gratis'}*
ā°āāšāšāšāāā¬£`

await conn.sendButton(m.chat, text, texto + `\n\nšļø š£ š„ š š  š šØ š  ā¢ ${premium ? 'ā' : 'ā'}\n${wm}`, img5, [['š šššš¼šš | š¾šš¼šš š', '/claim'], ['šš¤š”š«šš§ šš” ššš£šŖĢ | š½ššš  š©š¤ ššš£šŖ āļø', '/menu']], m, dos.getRandom())  
user.lasthourly = new Date * 1
}
handler.help = ['hourly']
handler.tags = ['xp']
handler.command = ['hourly', 'entega', 'cadahora', 'recibirentrega'] 
handler.level = 4 
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
