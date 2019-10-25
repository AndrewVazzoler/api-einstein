import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/interfaces/http/app';

const payloadSuccess = {
  message: 'With the integers passed it is possible to do the operation',
  status: 'success',
};

const payloadFailed = {
  message: 'With integers passed it is not possible to do the operation',
  status: 'failed',
};

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
