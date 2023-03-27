const modal = require('./registration-model')

const bcrypt = require('bcrypt')
JWT_SECRET = "khbasdkhbfkjandjfgnljanlf"

const jwt = require("jsonwebtoken")
const fetchUser = require('../mideelware/fetchuser')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());


const get = [
  (req, res) => {
    modal.find({}).lean(true).then((result) => {
      res.json({ response: true, result: result });
    }).catch(err => res.status(500).json(err));;
  }
]

const getUserById = [
  (req, res) => {
    modal.findById({ _id: req.params.id }).lean(true).then((result) => {
      res.json({ response: true, result: result });
    }).catch(err => res.status(500).json(err));;
  }
]

const addUser = [
  async (req, res) => {

    try {
      const salt = bcrypt.genSalt(10)
      // let Token;

      const secPass = await bcrypt.hash(req.body.password, parseInt(salt))

      User = await modal.create({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        password: secPass
      })
      console.log(User)
      res.json(User)
 }
    catch (err) {
      return console.log(err)
}}]




module.exports = {
  getUserById,
  addUser,
  get


};