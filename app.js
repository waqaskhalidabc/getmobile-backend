var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose')
var loginRouter = require('./routes/login');
var productsRouter = require('./routes/products');
var cors=require("cors");
var app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/users', loginRouter);
app.use('/products', productsRouter);
app.use(express.json);



app.use(function(req, res, next) {
  next(createError(404));
});



app.use(function(err, req, res, next) {
 
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.get("/ping",(req,res)=>{ res.send("pong")});

mongoose.connect("mongodb://localhost/getMobile", { useNewUrlParser:true,useUnifiedTopology: true})
.then(() =>console.log("Connected to Mongodb ...."))
.catch((error) =>console.log(error.message));
console.log("connected intodatabase======");
/*mongoose.connect("mongodb+srv://waqaskhalid:telenor0342@cluster0.lhmqt.mongodb.net/getMobile?retryWrites=true&w=majority", 
{ useNewUrlParser:true,useUnifiedTopology: true})
.then(() =>console.log("Connected to Mongo ...."))*/
((error) =>console.log(error));

console.log("connected=======");
module.exports = app;

