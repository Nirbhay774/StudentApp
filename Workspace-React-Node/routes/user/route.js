const express = require('express');
const routes = express.Router();
const controller = require('./controller');

routes.get('/' , controller.getStudent);
routes.get('/:id', controller.getStudentById);

routes.post('/' , controller.addStudent);

routes.put('./:id' , controller.updateStudent);
routes.delete('/:id' , controller.deleteStudent);
 module.exports = routes;   