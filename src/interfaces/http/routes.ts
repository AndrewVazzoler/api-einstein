import { Router } from 'express';
import { solveIntegers } from './controllers/solve.controller';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Api Albert Einstein' });
});

routes.get('/health', (req, res) => {
  return res.sendStatus(200);
});

routes.post('/api/solve', solveIntegers);

export default routes;
