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

const payloadError = {
  message: 'Must enter arrIntegers and valueWanted',
  status: 'error',
};

describe('Sample (e2e)', () => {
  it('return menssge success: test 1', async () => {
    const response = await request(app)
      .post('/api/solve')
      .send({
        arrIntegers: [1, 3, 5, 9, 7, 11, 23],
        valueWanted: 10,
      });
    expect(response.body).to.deep.equal(payloadSuccess);
  });
  it('return menssge success: test 2', async () => {
    const response = await request(app)
      .post('/api/solve')
      .send({
        arrIntegers: [1, 3, 5, 4, 7, 11, 23],
        valueWanted: 27,
      });
    expect(response.body).to.deep.equal(payloadSuccess);
  });
  it('return menssge success: test 3', async () => {
    const response = await request(app)
      .post('/api/solve')
      .send({
        arrIntegers: [19, 1, 3, 5, 4, 7, 11, 23],
        valueWanted: 20,
      });
    expect(response.body).to.deep.equal(payloadSuccess);
  });
  it('return menssge failed: test 1', async () => {
    const response = await request(app)
      .post('/api/solve')
      .send({
        arrIntegers: [10, 4, 3, 5, 9, 7, 11, 23],
        valueWanted: 3,
      });
    expect(response.body).to.deep.equal(payloadFailed);
  });
  it('return menssge failed: test 2', async () => {
    const response = await request(app)
      .post('/api/solve')
      .send({
        arrIntegers: [10, 4, 3, 5, 9, 7, 11, 23],
        valueWanted: 6,
      });
    expect(response.body).to.deep.equal(payloadFailed);
  });
  it('return menssge failed: test 3', async () => {
    const response = await request(app)
      .post('/api/solve')
      .send({
        arrIntegers: [10, 4, 3, 5, 9, 7, 11, 23],
        valueWanted: 31,
      });
    expect(response.body).to.deep.equal(payloadFailed);
  });
  it('return menssge error: test 1', async () => {
    const response = await request(app)
      .post('/api/solve')
      .send({
        valueWanted: 31,
      });
    expect(response.body).to.deep.equal(payloadError);
  });
});
