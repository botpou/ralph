import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ πππππ ππΌππΌ ππΌπ½ππΌπ πΎππππππ\n\nπππππππ\n*${usedPrefix + command} Hola Gata Bot*\n\nπππππ πΌ ππππ ππ ππΌππ ππ ππ\n\nπππΌππππ\n*${usedPrefix + command} Hello ππ»π±ππΊπ±*`
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=es`)    //(`https://simsimi.info/api/?text=${text}&lc=es`)    
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
//m.reply(`${tes}`) 
conn.sendHydrated(m.chat, `${tes}`, `πΌπ | ${wm}`, null, null, null, null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m)
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler



