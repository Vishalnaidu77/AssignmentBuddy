import 'dotenv/config';
import { pathToFileURL } from 'node:url';

import app from './src/app.js';

const port = Number(process.env.PORT) || 8000;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
}

export default app;
