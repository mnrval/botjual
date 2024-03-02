export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;
  let chat = global.db.data.chats[m.chat];
  let sender = global.db.data.chats[m.sender];
  let isAudio = m.mtype;
  let hapus = m.key.participant;
  let bang = m.key.id;

  if (chat.antiAudio && isAudio === "audioMessage") {
    if (isAdmin || !isBotAdmin) {
      // Do nothing for admins or if bot is not admin
    } else {
      m.reply(`*Terdeteksi File Mp3*\nMaaf, audio/mp3 yang kamu kirim akan dihapus karena admin mengaktifkan antiAudio`);
      return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }});
    }
    return true;
  }

  return true;
}
