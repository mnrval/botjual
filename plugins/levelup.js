import fetch from 'node-fetch';
import canvafy from "canvafy";
import { canLevelUp, xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, usedPrefix }) => {
  let who = m.sender;
  let name = conn.getName(m.sender);

  let discriminator = who.substring(9, 13);
  let pp = 'https://telegra.ph/file/f63a18f982c41fdf2c228.jpg';
  
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image');
  } catch (e) {
  } finally {
    let user = global.db.data.users[m.sender];
    let strr = `${user.registered ? user.name : ''}`;
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let desc = `🎉Level ${name} ${user.level} (${user.exp - min}/${xp})\n🎊Kurang ${max - user.exp} EXP lagi!`.trim()
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
      let p = await new canvafy.Rank()
      .setAvatar(pp)
      .setBackground("image", "https://telegra.ph/file/5056bb74fdee7e8761f5e.jpg")
      .setUsername(strr)
      .setBorder("#fff")
      .setLevel(user.level)
      .setCurrentXp(user.exp)
      .setRequiredXp(max)
      .build();

      await conn.sendFile(m.chat, p, '', desc, m, null, {
        fileLength: '10000',
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            description: wm,
            title: `ʜᴀʟʟᴏ ᴋᴀᴋ`,
            body: global.author,
      renderLargerThumbnail: true,
            thumbnail: await (await fetch (`https://telegra.ph/file/973e522125d6e356b02c9.jpg`)).buffer(),
            sourceUrl: 'https://chat.whatsapp.com/FBSbMhLu6BE9RSjU3VUKN1'     
      }}})
    }

    let before = user.level * 1;

    while (canLevelUp(user.level, user.exp, global.multiplier)) {
      user.level++;
    }

    if (before !== user.level) {
      await conn.reply(m.chat, `${name} Level Up!\n_${before}_ -> ${user.level}`.trim(), m);
    }
    // Mengirim gambar profil
    await conn.sendFile(m.chat, pp, 'profile.jpg', '*Good Job Semakin Sering Berinteraksi Dengan Bot Semakin Tinggi Level Kamu*', m);

    // Jeda agar pesan terlihat berurutan
    await new Promise(resolve => setTimeout(resolve, 2000));
    
  }
}

handler.help = ['levelup'];
handler.tags = ['xp'];
handler.command = /^levelup$/i;

export default handler;
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
