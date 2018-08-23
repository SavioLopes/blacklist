const { assert } = require('chai');
const request = require('supertest');

const server = require('../../../lib/server');
const database = require('../../../lib/commons/database');

describe('#Integration Tests - POST /cpf/blacklist', () => {
  describe('Success cases', () => {
    let app;

    before(async () => {
      await database.connect();
      app = await server.start();
    });

    afterEach(async () => {
      await database.getCollection('blacklist').drop();
    });

    after(async () => {
      await database.close();
      await server.stop();
    });

    it('Success insert CPF in blacklist - Should return 201', async () => {
      const body = {
        cpf: '097.062.456-50'
      };

      const result = await request(app).post('/cpf/blacklist').send(body);
      assert.strictEqual(result.statusCode, 201);
    });
  });

  describe('Error cases', () => {
    let app;

    before(async () => {
      await database.connect();
      app = await server.start();
    });

    after(async () => {
      await database.close();
      await server.stop();
    });

    it('POST /cpf/blacklist with invalid cpf - Should return 400', async () => {
      const body = {
        cpf: '11122200033'
      };

      const result = await request(app).post('/cpf/blacklist').send(body);
      assert.strictEqual(result.statusCode, 400);
    });

    it('POST /cpf/blacklist with database closed - Should return 500', async () => {
      await database.close();
      const body = {
        cpf: '09706245650'
      };

      const result = await request(app).post('/cpf/blacklist').send(body);
      assert.strictEqual(result.statusCode, 500);
    });
  });
});
