let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Hai kak mau order ya?\nSilahkan ketik *.order*\ncontoh .order buy premium`
    if (text.length < 10) throw `Jangan pendek bgt lah bang :!`
    if (text.length > 1000) throw `Buset lu lapor apa cerita -_`
   let tex = m.quoted ? m.quoted.text : '￴ ￴ ￴ ￴ ￴'
   let teks = `*${tex}*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.sendText(nomerown + '@s.whatsapp.net', teks)
    conn.sendText(m.chat, `_orderan terkirim mohon tunggu balasan dari owner_`)
}
handler.help = ['order']
handler.tags = ['store']
handler.command = /^(order)$/i
export default handler
