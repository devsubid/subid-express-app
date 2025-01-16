import express from 'express';
import createRouter from 'express-file-routing';
import { config } from './config';

const app = express();

await createRouter(app, {
  additionalMethods: ['ws'],
  directory: `${__dirname}/routes`,
});

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
