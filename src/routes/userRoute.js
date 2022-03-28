const express = require('express');
const usersController = require('../controllers/users');
const veryfied  = require('../middleware/auth')
const route = express.Router();

route
  .post('/', usersController.postUsers)
  .get('/profile', veryfied, usersController.profile)
  .post('/login', usersController.login)
  .post('/register', usersController.register)
  .get('/', veryfied, usersController.getUsers)
  
  module.exports = route