import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
❏「 *Premium* 」
 ❃ *1 Minggu:* Rp.5.000
 ❃ *2 Minggu:* Rp.10.000
 ❃ *1 Bulan:* Rp.20.000
 ❃ *1 Tahun:* Rp.40.000p_

❏keuntungan user premium?
🔓 unlock fitur *premium*
🔓 limit Unlimited
Jika Berminat Silahkan Hubungi Owner Nasky
*(Ketik .owner)*
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © Nasky `,
      body: global.author,
      thumbnailUrl: `https://cdn.btch.bz/file/1e40f14763d8fe70dd71f.jpg`,
      sourceUrl: `https://chat.whatsapp.com/GZBkaUWBMA6BZV50BAvC57`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(prem|premium|buyprem)$/i;

export default handler;