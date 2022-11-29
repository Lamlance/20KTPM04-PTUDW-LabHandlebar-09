const express = require('express');
const route = express.Router();
const controller = require('../controllers/task2Controller');

route.get('/', (req, res) => {
  controller.show(req, res);
});