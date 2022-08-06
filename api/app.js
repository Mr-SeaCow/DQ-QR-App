const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

//require('./controllers/databaseController-OLD');

require('dotenv').config();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routeHandler')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


let StoreInfoDAO = require('./database/storeInfoDAO');
let MenuInfoDAO = require('./database/menuInfoDAO');

let createStoreSchema = require('./schema/createStoreSchema'); 
let createMenuSchema = require('./schema/createMenuSchema');

const MongoClient = require('mongodb').MongoClient;

// PUT IN ./bin/www ????
MongoClient.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    createStoreSchema(client);
    createMenuSchema(client);
    await StoreInfoDAO.injectDB(client);
    await MenuInfoDAO.injectDB(client);
    
    // console.log(await StoreInfoDAO.getStoreInfo(15401));
    
    // console.log(await StoreInfoDAO.addStoreInfo({ id: 15409, authToken: 'lo8n6xuv8dhc0oeg1uy1sy8glfqsmkoo6actlvyh4q5gd64s1x2r9g5c5z0l2pe9t28tfssaybqtkvdkgdq9gyy4srqyn4zn56itziwkchk45xwgeg31jltzergd79ebvrrjfvqlfdb4k8kfltneckko271pv5cfra2gydcl6m88ez1keum7zms8wyzudbndxx5gs7j8ird8lmr6fsphrgt8kwcjku0ozdr6biderc8jxu9klpz7ry8a90t94x0m' }));

  });

module.exports = app;
