var express = require('express');
const routes = express.Router();

const user = require ("./user")
routes.use('/user' , user.route)

const log = require('./log')
routes.use('/log' , log.route)



module.exports = {
    modules: {
      user,
      log
    },
    routes
  }