let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa Bot* 」
│ • *7 Hari:* Rp.6.000
│ • *15 Hari:* Rp.9.000
│ • *1 Bulan:* Rp.21.000
│ • *2 Bulan:* Rp.33.000
❏──────────────๑
❏──「 *Premium* 」
│ • *7 Hari:* Rp.5.000
│ • *16 Hari:* Rp.7.000
│ • *1 Bulan:* Rp.13.000
│ • *2 Bulan:* Rp.31.000
❏──────────────๑
❏─「 *Pembayaran* 」
│ 📌 Hubungi Owner!!!
│wa.me/${global.nomerown}
│Dana✓ Gopay✓ OVO✓
│=======QRIS=======
❏──────────────๑

`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(sewabot)$/i

export default handler