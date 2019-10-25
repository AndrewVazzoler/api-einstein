import { config } from 'dotenv';
import app from './src/interfaces/http/app';

config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.info(`🤘 API - http://localhost:${port || 3333}`);
});
