const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
// const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use(cors());
// app.use(function(){
//   app.use(express.bodyParser());
// });
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');

const studentRoute = require("./routes").routes;
const dbConfig = require("./service/constant").dbConfig;

// connect to mongo db

const mongoUri = `${dbConfig.host}`;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: 1 });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database:`);
});

app.get('/', function (req, res) {
  res.render('index', { title: 'Student API' })
  res.send({success:true})
})

app.use('/v1',  studentRoute)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, () => {
  console.log(`Server is running on port: ${port}`);
});