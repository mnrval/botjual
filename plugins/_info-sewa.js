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
❏ *_Harga Sewa_*
❃ _15 Hari 8k / Group_
❃ _30 Hari 20k / Group_
❃ _45 Hari 25k / Group_
❃ _60 Hari 30k / Group_
❃ _1 Tahun 50k / Group_

❏ *_Fitur_*
❃ _Antilink_
❃ _Welcome_
❃ _Enable_
❃ _Store List_
❃ _Promote/Demote_
❃ _HideTag_
❃ _Dan Lain Lain_

Jika Berminat Silahkan Hubungi Owner Nasky
*(Ketik .owner)*
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: ` © Nasky`,
      body: global.author,
      thumbnailUrl: `https://cdn.btch.bz/file/5a7a1b128348d096153a0.jpg`,
      sourceUrl: `https://chat.whatsapp.com/EgDgZS8tCDC86RHnazVQ00`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sewabot|sewa|rental)$/i;

export default handler;