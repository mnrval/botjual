let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/7c4bc9ce6370d52a4c6de.jpg'
let sewa = `
         _*PAYMENT*_
❏───────────────•
│ • *Pulsa:* [083849080010]
│ • *Dana:* [${global.pdana}]
│ • *Ovo:* [083849080010]
│ • *Gopay:* [083849080010]
❏───────────────•

Silahkan Payment menggunakan nomor atau Qris diatasnya`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['payment']
handler.tags = ['store']
handler.command = /^(donasi|payment)$/i

export default handler