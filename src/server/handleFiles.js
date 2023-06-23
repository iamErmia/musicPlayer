import { glob } from "glob";
import { parseFile } from "music-metadata";
import { fileURLToPath, pathToFileURL } from 'url';
import path from "path";
import fs from 'fs';

async function parseFiles(files) {
    const musics = new Map();
    for (const file of files) {
        const data = await parseFile(file);
        const imagePath = pathToFileURL(
            `${
                path.parse(path.parse(path.parse(`${fileURLToPath(import.meta.url)}`).dir).dir).dir
            }\\public\\covers\\${data.common.title}.jpg`
          );
        if (data.common.picture && !musics.has(data.common.title ?? 'TITLE')) {
            musics.set(data.common.title ?? 'TITLE', {
                title: data.common.title ?? 'TITLE',
                artist: data.common.artist ?? 'ARTIST',
                album: data.common.album ?? 'ALBUM',
                genre: data.common.genre ? data.common.genre : undefined,
                duration: data.format.duration
            })
            fs.writeFileSync(imagePath, data.common.picture[0].data);
        }
    }

    return musics;
}

async function getFiles() {
    const files = await glob('music/*.mp3', {
        ignore: 'node_modules/**'
    });
    return files;
}

export async function getMusics() {
    return await parseFiles(await getFiles());
}