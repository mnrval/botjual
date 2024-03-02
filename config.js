import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Ganti nomor kamu
global.owner = [
['6281387719373', '𝑫𝒂𝒏𝒛𝑲𝒆𝒄𝒆𝒉', true]
] 
global.mods = []
global.prems = []
// Info info
global.nomerbot = '6289516423294'
global.nomorwa = '6289516423294'
global.nameown = '𝑫𝒂𝒏𝒛𝑲𝒆𝒄𝒆𝒉'
global.nomerown = '6281370840363'
global.packname = '© ᴅᴀɴᴢᴋᴜʟʟʙᴀᴛ'
global.author = '𝑫𝒂𝒏𝒛𝑲𝒆𝒄𝒆𝒉'
global.namebot = 'ᴅᴀɴᴢᴋᴜʟʟʙᴀᴛ'
global.wm = 'ᴅᴀɴᴢᴋᴜʟʟʙᴀᴛ'
global.stickpack = 'ᴅᴀɴᴢᴋᴜʟʟʙᴀᴛ'
global.stickauth = 'ᴅᴀɴᴢᴋᴜʟʟʙᴀᴛ\n© ʙʏ 𝑫𝒂𝒏𝒛𝑲𝒆𝒄𝒆𝒉'


  

//thumbnail 
global.ppKosong = 'https://i.ibb.co/3Fh9V6p/avatar-contact.png'
global.didyou = 'https://cdn.btch.bz/file/44a9238e16f2ea768aacc.jpg'
global.rulesBot = 'https://cdn.btch.bz/file/6c4a081be09986ee14587.jpg'
// Ubah Foto Kamu Disni
global.thumbnail = 'https://cdn.btch.bz/file/82bc5c2fadf88051bbbf6.jpg'
global.thumb = 'https://cdn.btch.bz/file/82bc5c2fadf88051bbbf6.jpg'
global.logo = 'https://cdn.btch.bz/file/0538bf069d7e57df69d01.jpg'





// foto 
global.unReg = 'https://cdn.btch.bz/file/d4d92c5773b96fbe46c1a.jpg'
global.registrasi = 'https://cdn.btch.bz/file/55bae2700269a7c4aa469.jpg'
global.confess = 'https://cdn.btch.bz/file/55bae2700269a7c4aa469.jpg'
global.access = 'https://cdn.btch.bz/file/c7ae92c1767037a32f6ea.jpg'
global.tqto = 'https://cdn.btch.bz/file/81d1767096b10588c3828.jpg'
global.spotify = 'https://cdn.btch.bz/file/14d15cd26faf7c61c33e2.jpg'
global.weather = 'https://cdn.btch.bz/file/d5ccb6e5f21a9cd25848d.jpg'
global.gempaUrl = 'https://cdn.btch.bz/file/d11b2a73ba91aa0d72774.jpg'
global.akses = 'https://cdn.btch.bz/file/c7ae92c1767037a32f6ea.jpg'
// wel/good
global.wel = 'https://cdn.btch.bz/file/10b41fb758a5c8ef77f87.mp4'
global.good = 'https://cdn.btch.bz/file/74c12b4fdd1f0b97490aa.mp4'
// Sosmed
global.sig = 'https://instagram.com/wfiqqqs'
global.sgh = 'http://linkbio.co/'
global.sgc = 'https://chat.whatsapp.com/HgLmCefiAPn7hjBCQGAYoS'
// ambil .idgc ketik di grup lu 
// => m.chat 
global.idgc = '-'
// Donasi
global.psaweria = '-'
global.ptrakterr = '-'
global.pdana = '081370840363'
// Info Wait
global.wait = '*Tunggu sebentar..*'
global.eror = '*Terjadi Kesalahan*!'
global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.uptime = ''
global.xyro = 'UnlimitedXyroineeKey'
global.fxc = 'Frieren'
global.lol = 'IchanZX' //GataDios , Akiraa, haikalgans
global.rose = 'Rk-keylareinsJk'
global.betabotz = 'CyberGenius'
global.xzn = 'namaaris' //y6rsxtbase,yoyox
global.neoxr = 'Rodotz'
global.ibeng = 'mnmhKpr2ai'

global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    rose: "https://itsrose.life",
    fxc: "https://api-fxc7.cloud.okteto.net",
    lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "UnlimitedXyroineeKey",
    "https://itsrose.life": "Rk-keylareinsJk",
    "https://api-fxc7.cloud.okteto.net": "Frieren",
    "https://api.lolhumaan.xyz": "gatadios"
    
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})