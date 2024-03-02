import hxz from 'hxz-api'

let handler = async (m, {
	conn,
	text,
	usedPrefix,
	command
}) => {
		let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
		if (!teks) throw `*example:*${usedPrefix}${command} dusk till dawn`
	try {
		let result = await hxz.lirik(text)
		conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
		conn.sendFile(m.chat, result.thumb, 'thumb.jpg', result.lirik, m)

	} catch (e) {
		console.log(e)
		m.reply('Terjadi kesalahan, silahkan coba lagi nanti')
	}
}

handler.help = ['lirik'].map(v => v + ' *⧼title⧽*')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.register = true
handler.limit = true

export default handler