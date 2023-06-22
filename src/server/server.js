import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from "express";
import { getMusics } from './handleFiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000

app.use(express.static('public', {root: __dirname}))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
})

app.get('/songs', async (_req, res) => {
  return res.json(Object.fromEntries(await getMusics()));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})