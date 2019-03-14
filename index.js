
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('combined'));



var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get that is used in the assignment most_repeating_words

app.get('/repeated_words.html', function(req,res) {
 res.sendFile(path.join  (__dirname, 'repeated_words_inFile.html'));

 });

app.get('/foo.txt', function(req,res) {
 res.sendFile(path.join  (__dirname, 'foo.txt'));

 });

// other app.get are just for practice
app.get('/submit-name', function (req,res) {
   var name=req.query.name;
   
   res.send( JSON.stringify(name));
});




app.get('/index.html', function(req,res) {
 res.sendFile(path.join  (__dirname, 'index.html'));

 });

app.get('/' , function(req,res){

res.send("hello");

});


app.get('/contact' , function(req,res){

res.send("hy man ssup");

});

app.get('/so/:id' , function(req,res){

res.send("your id is "+ req.params.id);

});

app.get('/index' , function(req,res){

res.sendFile(__dirname + "/index.html");

});


app.get('/profile/:name' ,  function(req,res){

 res.render('C:/Users/Ashish/Desktop/backend/pro/views/profile.ejs', {persons: req.params.name});

});



app.get('/profile1' ,  function(req,res){

 res.render('C:/Users/Ashish/Desktop/backend/pro/views/profile1.ejs', {qs: req.query});

});

app.post('/profile1' , urlencodedParser , function(req,res){
  
  res.render('C:/Users/Ashish/Desktop/backend/pro/views/profile2.ejs' ,  {data:req.body})

})


app.get('/profile3' ,  function(req,res){

 res.render('C:/Users/Ashish/Desktop/backend/pro/views/profile3.ejs');

});








app.listen(3000, function () {
  console.log('Example app listening on port 8000!');
});					
