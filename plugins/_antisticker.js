export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;
  let chat = global.db.data.chats[m.chat];
  let sender = global.db.data.chats[m.sender];
  let isSticker = m.mtype;
  let hapus = m.key.participant;
  let bang = m.key.id;

  if (chat.antiSticker && isSticker === "stickerMessage") {
    if (isAdmin || !isBotAdmin) {
      // Do nothing for admins or if bot is not admin
    } else {
      m.reply(`*Terdeteksi File Webp*\nMaaf, sticker yang kamu kirim akan dihapus karena admin mengaktifkan antiSticker`);
      return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }});
    }
    return true;
  }

  return true;
}
