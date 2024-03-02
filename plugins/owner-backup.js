import fs from 'fs';
import archiver from 'archiver';
import path from 'path';

const handler = async (m, { conn }) => {
  m.reply('Sedang mempersiapkan backup...')
  let backupName = `backup_${new Date().toISOString().replace(/:/g, '-')}.zip`
  let output = fs.createWriteStream(backupName);
  let archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', function () {
    let caption = `Berikut adalah file backup kode bot:\nNama file: ${backupName}\nUkuran file: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`
    conn.sendFile(m.chat, backupName, backupName, caption, m)
  });

  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);
  archive.glob('**/*', {
    cwd: path.resolve(__dirname, '../'),
    ignore: ['node_modules/**', 'sessions/', 'tmp/**', '.npm/**', backupName]
  });
  archive.finalize();
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^backup$/i

handler.owner = true

export default handler