let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = '*format salah!!*\n\n*example:* ' +usedPrefix+command+ ' 16/11/2007 Nasky|harapan saya semoga tahun ini gak jomblo'
  global.db.data.users[m.sender].ultah = global.db.data.users[m.sender].ultah || []
  let ultah = global.db.data.users[m.sender].ultah
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (ultah.includes(title)) return m.reply('Text tidak tersedia!\n\nText Mungkin : Sudah digunakan')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].ultah.push(cttn)
  conn.reply(m.chat, `berhasil membuat daftar ulang tahun🎂\nUntuk melihat Ketik: ${usedPrefix}listultah`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['addultah <title|isi>']
handler.tags = ['main']
handler.command = /^addultah$/i
handler.group = true
export default handler 

//by VynaaChan 
// SC BY © VYNAA CHAN
// RECOE WAJIB KASI CREDITS 
// WA: 6283896757978
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// https://t.me/VynaaMD