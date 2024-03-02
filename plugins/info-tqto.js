import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Thanks Too :
	
*• Allah S.W.T*
*• My Familly*
*• My Friends*
*• My Girls*
*• Danz*
*• Aris*
*• Tio*
*Penulis Ulang: Chae*
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1fc834a1ee47c8e730e09.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;