const { Router } = require('express');
const express = require('express');
const routes = express.Router();
// import getSign form "./login"
const controller = require('./controller');
const { modelName } = require('./registration-model');
// const datas= require('./login');
const login= require('./login');
const fetchUser = require('../mideelware/fetchuser');
// const { default: Login } = require('../../../student-app/src/components/Login');


// var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
// let  urlencodedParser = bodyParser.urlencoded({ extended: true })

routes.get('/', controller.get)
// routes.get('/' , controller.getStudent);
routes.get('/:id', controller.getUserById);

routes.post('/' , controller.addUser);


// routes.put('./:id' , controller.updateStudent);
// routes.delete('/:id' , controller.deleteStudent);


//login 

routes.post('/login'  , login.getSign )
// routes.post('/getuser'   , fetchUser ,  controller.getMiddelware)
 module.exports = routes;