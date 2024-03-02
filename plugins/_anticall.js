const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default;
import { format } from 'util';

const isNumber = x => typeof x === 'number' && !isNaN(x);
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms));

export async function all(m) {
  if (m.fromMe && m.isBaileys) return true;
  let text;
  let setting = global.db.data.settings[this.user.jid];
  if (!setting.antiCall) return;

  if (
    m.messageStubType === WAMessageStubType.CALL_MISSED_VOICE ||
    m.messageStubType === WAMessageStubType.CALL_MISSED_VIDEO
  ) {
    await this.reply(m.chat, 'Kamu diblokir oleh bot karena telah melanggar aturan bot\n\n*📮Dilarang menelepon Bot!*', null);
    await delay(1000);
    await this.updateBlockStatus(m.chat, "block");
  }
}
