import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
handler.customPrefix = /^(VynaaMD|bacot|bot|hai|poke|anj|goblok|tolol|y|wkwk|anj|jir|oy|najis|jawa|jawir)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/9e54b87716139632bfff0.png",//patrick huu
 "https://telegra.ph/file/4a2db7bc9f3f9ecfc007d.png",//anime yntkts
 "https://telegra.ph/file/5f6079714851d9927697e.png",//windah bocil
 "https://telegra.ph/file/d5100b4ce95a0012e88c1.png",//patrick bawa minum
 "https://telegra.ph/file/2ade25087c89f86587853.png",//pak polisi pap tt
 "https://telegra.ph/file/eb2b5e5fff569896c1639.png",//kucing1
 "https://telegra.ph/file/bd8a0e7ea01218531798b.png",//kacamata
 "https://telegra.ph/file/300610838ffa0e6576eb9.png",//patrick pembohong
 "https://telegra.ph/file/954afe562e58c144620ae.png",//spongebob FBI
 "https://telegra.ph/file/72026dcc46e4cb4b6f9ae.png",//mazowski monster inc
 "https://telegra.ph/file/aa9f1bea869e362e6f56e.png",//wkwk
 "https://telegra.ph/file/09bbff0da316ba21b4f8e.png",//kucing2
 "https://telegra.ph/file/2e0637d57e3cc1abcb4a0.png",//patrick anak setan
 "https://telegra.ph/file/d771ae015b5486859d03f.png",//mazowski 2
 "https://telegra.ph/file/9c7606f571c05b4d0c941.png",//hengker
 "https://telegra.ph/file/84fd937257bcd614d6c9e.png",//anjing
 "https://telegra.ph/file/b8ba6989c00c50df049d0.png",//bapak bapak lovee
 "https://telegra.ph/file/2f618fffab6ff7bea32ab.png",//abang saleh
 "https://telegra.ph/file/dfbf483c209a31f01b4e5.png",//hengker2
 "https://telegra.ph/file/2f3b6e27ae9df26983a62.png",
 "https://telegra.ph/file/6bfddab70d42250519360.png",
 "https://telegra.ph/file/c3ccb250eb6fde2dad2eb.png",
 "https://telegra.ph/file/7a37b0a761cd674a5afe4.png",
 "https://telegra.ph/file/07cbf8799f1bf42618c79.png",
 "https://telegra.ph/file/079b737f98efca13b5426.png",
 "https://telegra.ph/file/b4725252d57c99611f499.png",
 "https://telegra.ph/file/b4725252d57c99611f499.png",
 "https://telegra.ph/file/6eee6ccba389465dc3939.png",
 "https://telegra.ph/file/63ae716a65d2c4d6e5729.png",
 "https://telegra.ph/file/3a2233c611f05369d5785.png",
 "https://telegra.ph/file/97316713717112889ce1b.jpg",
 "https://telegra.ph/file/05ce002b91c08945f8223.png",
]
