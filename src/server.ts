import express from 'express';
import { createServer } from 'http';

import './database';
import { routes } from './routes';

const app = express();

const http = createServer(app);

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));