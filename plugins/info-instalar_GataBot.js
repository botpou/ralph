let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
let gata = `πππππΌππΌπΎπππ πΏπ ππ‘ππ¬ππ’π§ π

*ββββββββββββββ¬£*
β πππππΌππΌπ ππ ππππππ
*β― β― β― β― β― β― β― β― β― β― β― β― β―*
termux-setup-storage
apt update
pkg upgrade
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
git clone https://github.com/
cd Andybot
npm install
npm update
npm start
*ββββββββββββββ¬£*

*ββββββββββββββ¬£*
β πππππΌππΌπ ππ ππππππ
*β― β― β― β― β― β― β― β― β― β― β― β― β―*
*_https://heroku.com/deploy?template=https://github.com/andy_mr_lit/Andymd*
*β― β― β― β― β― β― β― β― β― β― β― β― β―*
*AΓ±ada lo siguente al Buildpack:*
_https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git_
_https://github.com/clhuang/heroku-buildpack-webp-binaries.git_
*ββββββββββββββ¬£*`

conn.sendButton(m.chat, gata, `ComunΓ­cate con MΓ­ Creadora si necesitas ayuda con la InstalaciΓ³n.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ | πΌπππ€πͺπ£π©π¨ β', '.cuentasgb'],
['π πΏπ€π£ππ§ | πΏπ€π£ππ©π', '.donar']], fkontak, m)}

handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
