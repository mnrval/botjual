import axios from "axios"

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*example*: .play see you again');
  
  conn.sendMessage(m.chat, {
    react: {
      text: '🎶',
      key: m.key,
    }
  });
    try {
let apiUrl = `https://api.botzaku.com/download/aplay2?text=${global.lolkey}&apikey=SkyINCxd`;
let { data } = await axios.get(apiUrl)
let result = data.result.url
let sky = data.result
     await conn.sendMessage(m.chat, {
                    audio: {
                        url:  `https://api.botzaku.com/download/aplay?text=${text}%20official%20video&apikey=SkyINCxd`
                    },
                    fileName: `${text}.mp3`,
                    mimetype: "audio/mp4"
                }, {
                    quoted: m
                })
                            } catch (error) {
    console.error(error);
    m.reply(`Failed to progresing. Please try again later: ${error}`);
  }
};

handler.help = ['play2 ⧼query⧽','music2 ⧼query⧽'];
handler.tags = ['downloader'];
handler.command = /^(play2|music2)$/i;
handler.limit = true;

export default handler;