import fs from 'fs'

let handler = async (m, { conn }) => {
let loadd = [
'⋘ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...  𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
'▒▒▒▒▒▒▒▒▒▒ 0%',
'█▒▒▒▒▒▒▒▒▒ 10%',
'███▒▒▒▒▒▒▒ 30%',
'█████▒▒▒▒▒ 50%',
'███████▒▒▒ 70%',
'█████████▒ 90%',
'██████████ 100%',
'Ｓｕｃｃｅｓｓ...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
	let pfft = `
ubah menu di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://media.tenor.com/mIt_CBqN3PQAAAPo/freyajkt48-jkt48.mp4"},
      gifPlayback: true,
      caption: 'Danz adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dikembangkan oleh Chae / Danz, bot ini menggunakan sumber asli base Botcahx yang terus diperbarui oleh Chae dan Danz untuk memberikan pengalaman berinteraksi yang lebih mudah dan menyenangkan.\nDengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, Bot Danz dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. Bot Danz juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.\nSebagai produk yang dikembangkan dan diperbarui oleh Chae dan Danz, Bot Nasky selalu menerima pembaruan fitur-fitur terbaru untuk memberikan layanan yang semakin baik dan canggih. Dengan Bot Danz, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan Bot Danz sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp!',
      contextInfo: {
      externalAdReply: {
      title: `© About Me`,
      body: global.author,
      thumbnailUrl: 'https://cdn.btch.bz/file/ad93c855383dfd014b48e.jpg',
      sourceUrl: `https://chat.whatsapp.com/HgLmCefiAPn7hjBCQGAYoS`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
              let vn = "./vn/yowaimo.mp3"
      
	conn.sendFile(m.chat, vn, "ehee.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
}
handler.command = /^(about|help)$/i;

export default handler;