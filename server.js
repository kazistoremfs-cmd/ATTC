import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

// Serve built static assets from dist with cache headers
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1h',
  index: 'index.html',
}));

// SPA fallback: send index.html for any navigation routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Al-Zahid Technical Training Center server listening on port ${port}`);
});
