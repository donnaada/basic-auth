'use strict';
const server = require('../src/server');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const supertest = require('supertest');
const request = supertest(server.app);
const { sequelizeDB } = require('../src/auth/models');
const { userModel } = require('../src/auth/models/user-model');

// Connect to the test database before running the tests
beforeAll(async () => {
  await sequelizeDB.sync();
});

// Close the database connection after running the tests
afterAll(async () => {
  await sequelizeDB.close();
});


describe('Testing Routes', () => {

  test('Signup Route Proof of Life Test', async () => {
    const response = await request.get('/signup');
    expect(response.status).toEqual(200);
  });

});

describe('Simple testing for signup route', () => {
  test('Signup', async () => {
    let response = await request.post('/signup').send({
      username: 'username',
      password: 'password',
    });

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('username');
  });

});





