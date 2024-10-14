import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from '../dist/server/serverApp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

// Read the built HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../dist/client/index.html')).toString();
const [head, tail] = html.split('<!--not rendered-->');

const app = express();

// Serve static assets
app.use('/assets', express.static(path.resolve(__dirname, '../dist/client/assets')));

// Handle all other routes with server-side rendering
app.use((req, res) => {

  res.send(head);

  const stream = renderApp(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError(err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    },
    onAllReady() {
      res.send(tail);
    },
    onError(err) {
      console.error(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

export default app;