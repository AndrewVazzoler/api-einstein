import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/interfaces/http/app';

describe('App (e2e)', () => {
  it('GET / return menssge success', async () => {
    const response = await request(app).get('/');
    expect(response.body).to.deep.equal({ message: 'Api Albert Einstein' });
  });
  it('GET /health return menssge success', async () => {
    const response = await request(app).get('/health');
    expect(response.status).to.deep.equal(200);
  });
});
