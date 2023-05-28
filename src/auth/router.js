'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const { userModel } = require('./models');
const basicAuth = require('./middleware/basic');

const router = express();

router.use(express.urlencoded({ extended: true }));

//Proof of Life for signup route
router.get('/signup', (req, res) => {
  res.status(200).send('Signup Route Reached!');
});

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await userModel.create(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});


//Proof of Life for signup route
router.get('/signin', (req, res) => {
  res.status(200).send('Signin Route Reached!');
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', basicAuth, (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    next('Invalid Login. Message: ' + error.message);
  }
});

module.exports = router;

