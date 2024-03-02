export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;
  let chat = global.db.data.chats[m.chat];
  let sender = global.db.data.chats[m.sender];
  let isVideo = m.mtype;
  let hapus = m.key.participant;
  let bang = m.key.id;

  if (chat.antiVideo && isVideo === "videoMessage") {
    if (isAdmin || !isBotAdmin) {
      // Do nothing for admins or if bot is not admin
    } else {
      m.reply(`*Terdeteksi File mp4*\nMaaf, video/mp4 yang kamu kirim akan dihapus karena admin mengaktifkan antiVideo.`);
      return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }});
    }
  }

  return true;
}
