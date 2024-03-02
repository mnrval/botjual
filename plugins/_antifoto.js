export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return !0;
  let chat = global.db.data.chats[m.chat];
  let isFoto = m.mtype;
  let hapus = m.key.participant;
  let bang = m.key.id;

  if (chat.antiFoto && isFoto === "imageMessage") {
    if (isAdmin || !isBotAdmin) {
      // Do nothing for admins or if bot is not admin
    } else {
      m.reply(`*Terdeteksi File Image*\nMaaf, foto yang kamu kirim akan dihapus karena admin mengaktifkan antiFoto.`);
      return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }});
    }
    return !1;
  }
}
