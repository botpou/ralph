import fetch from 'node-fetch'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ๐', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '๐ป ๐ฆ๐๐ฝ๐ฒ๐ฟ ๐ผ๐ฃ๐๐ฎ๐๐ผ๐-๐ ๐ - ๐ช๐ต๐ฎ๐๐๐๐ฝ๐ฝ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]  

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca
//let wm = global.wm 

let peces = `๐๐ ๐ฃ๐๐ฆ๐๐๐ก๐ ๐๐ ๐ฃ๐๐๐๐ฆ ๐๐
๐คยป *${name}*

โญโโโโโโโโโโฌฃ 
โ *๐ฃ๐๐ฆ๐๐๐ก๐ ๐๐ ๐ฃ๐๐๐๐ฆ : ๐๐๐ฆ๐ ๐ฃ๐ข๐ข๐*
โ *โธโธโธโธโธโธโธโธโธโธโธโธโธโธ*
โ ๐ฆ *Tiburรณn : Shark ยป ${hiu}*
โ ๐ *Pez : Fish ยป ${ikan}*
โ ๐  *Dory : Surgeonfish ยป ${dory}*
โ ๐ *Orca : Killer whale ยป ${orca}*
โ ๐ณ *Ballena : Whale ยป ${paus}*
โ ๐ฆ *Calamar : Squid ยป ${cumi}*
โ ๐ *Pulpo : Octopus ยป ${gurita}*
โ ๐ก *Pez Globo : Blowfish ยป ${buntal}*
โ ๐ฆ *Camarรณn : Shrimp ยป ${udang}*
โ ๐ฌ *Delfรญn : Dolphin ยป ${lumba}*
โ ๐ฆ *Langosta : Lobster ยป ${lobster}*
โ ๐ฆ *Cangrejo : Crab ยป ${kepiting}*
โฐโโโโโโโโโโฌฃ
๐ *Total: ${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}*`.trim()
await conn.sendButton(m.chat, wm, peces, img5, [['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช โ๏ธ', '/menu']], m, dos.getRandom())
//conn.sendButton(m.chat, peces, `${wm}`, [['Pasar', '#pasar']], m)
}
handler.help = ['kotakikan', 'kolam', 'kolamikan']
handler.tags = ['rpg']
handler.command = /^(picina|piscina|peces|kotak(ikan)?|kolam(ikan)?)$/i
export default handler 
//handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
