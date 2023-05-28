const supertest = require('supertest');
const { app } = require('../server');
const { sequelizeDB } = require('../auth/models');
const {userModel} = require('./models');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const request = supertest(app);

// Import the basicAuth middleware function
const basicAuth = require('./src/auth/middleware/basic');

// Connect to the test database before running the tests
beforeAll(async () => {
  await sequelizeDB.sync();
});

// Close the database connection after running the tests
afterAll(async () => {
  await sequelizeDB.close();
});

describe('Linked List', () => {
  test('Should reach proof of life', ()=>{
    // Code Here
    app.get('/', (req, res) => {
      res.status(200).send('Welcome to the server!');
    });

  });
});

describe('POST /signin', () => {

  test('should respond with the authenticated user', async () => {
    // Create a test user
    const user = {
      username: 'testuser',
      password: 'testpassword',
    };

    // Hash the test user's password
    user.password = await bcrypt.hash(user.password, 10);

    // Save the test user to the database
    await userModel.create(user);

    // Create an encoded credentials string for basic authentication
    const encodedCredentials = Buffer.from(`${user.username}:${user.password}`).toString('base64');

    const response = await request.post('/signin')
      .set('Authorization', `Basic ${encodedCredentials}`);

    // expect(response.statusCode).toBe(200);
    expect(response.body.username).toEqual('testuser');
  });

});
