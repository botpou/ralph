import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}πππ πΎπππΌππΏππ πΏπ ππππΎππππ ππππΌπ πΏπππΌπΎππππΌπΏππ πππ *#on stickers* ππΌππΌ πΌπΎππππΌπ\n\nπππ ππππΎππππ πΎππππΌππΏπ πΌππ πΏπππΌπ½πππΏ πππ *#on stickers* ππ πππΌπ½ππ`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = 'π ππ‘ππ¬-π π'
let nombre2 = 'ππ»π±ππΊπΏπΉπΆ' 
 
const s = [
'https://c.tenor.com/-8qgEEd80skAAAAi/chika.gif',
'https://c.tenor.com/GLpWclhFs28AAAAi/mine-funny.gif', 
'https://c.tenor.com/KyoAsIz_GH8AAAAi/heat-wave.gif',
'https://c.tenor.com/4cNykyUM0M0AAAAi/draxy-stickery.gif',
'https://c.tenor.com/-I1sYsJQ-XUAAAAi/vibe-dance.gif',  
'https://media4.giphy.com/media/5dQQUpPjaZQeQ/giphy.gif?cid=ecf05e47wz1ny77fqnp8gvps730g2edfumud5kz2pqe9wh2o&rid=giphy.gif&ct=g',
'https://c.tenor.com/U-XE486arkUAAAAi/chika-fujiwara-chika.gif',
'https://media3.giphy.com/media/3osxAKYM7Wx8sji9LY/giphy.gif?cid=ecf05e47db4pd3yaey7geps2nhso6myni75w6umq8ph297zo&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/5GoVLqeAOo6PK/giphy.gif?cid=ecf05e47ukjm4gay9dnm1qlb4za6tpgnsmkq2tbnob86z88c&rid=giphy.gif&ct=g',
'https://media4.giphy.com/media/q4sdF9tchap6E/giphy.gif?cid=ecf05e47270meko3jt3y05iv01ou7ffzktzm8e4i34sb0bpt&rid=giphy.gif&ct=g'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.customPrefix = /animada|animado|contento|contenta|alegrΓ­a|alegrarse|alegremonos|emocionado|emocionada|feliz/i 
handler.command = new RegExp
handler.exp = 50
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))





