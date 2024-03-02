import uploadImage from '../lib/uploadImage.js'
import uploadFile from '../lib/uploadFile.js'
import axios from 'axios'; // tambahkan import axios

/**
 * Anti NSFW by Tio
 **/

export async function before(m, { conn }) {
  let data = db.data.chats[m.chat];
  if (m.isBaileys && m.fromMe) return true;
  if (!m.isGroup) return false;

  const { mtype, text, sender, key } = m;
  let hapus = key.participant;
  let bang = key.id;

  if (data.antiNsfw) {
    if (mtype === 'imageMessage' || mtype === 'videoMessage' || mtype === 'stickerMessage') {
      // code
      const media = await m.download();

      let up;
      if (mtype === 'imageMessage' || mtype === 'videoMessage') {
        up = await uploadImage(media);
      } else if (mtype === 'stickerMessage') {
        up = await uploadFile(media);
      }
      const { nsfw, msg } = await antiNsfw(up);
      if (nsfw > 0.35) {
        await conn.sendMessage(m.chat, { text: `❗${msg}` }, { quoted: fkon, mentions: m.sender }).then(_ => {
          conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus } });
        });
      } else {
        console.log('media aman');
      }
    }
  }
}

async function antiNsfw(url) {
  try {
    let response = await axios.get('https://api.sightengine.com/1.0/check.json', {
      params: {
        'url': url,
        'models': 'nudity-2.0',
        'api_user': '1654235197',
        'api_secret': 'xSHxv2DKjBQow7MR52jsPAzici',
      }
    });

    if (response.data.status == 'success') {
      const message = `Konten NSFW *( ${response.data.nudity.sexual_activity}% )* terdeteksi oleh sistem, media mengandung NSFW.`;

      return {
        nsfw: response.data.nudity.sexual_activity,
        msg: message
      };
    }
  } catch (e) {
    console.log('terjadi error saat mendeteksi media: ' + e);
  }
}
