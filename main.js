const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Body-parser (for POST requests)
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//https://www.youtube.com/watch?v=EYKjBJDPvEU
app.set('view engine', 'ejs');

let fs = require('fs');

let users;
let added_users;

fs.readFile('users.json', 'utf8', function (err, data) {
  if (err) throw err;

  //Parsing to READ data
  users = JSON.parse(data);

  // Returns the format

  // {
  //   firstname: 'Kamalani',
  //   lastname: 'Georgy',
  //   email: 'georgy.porgy@gmail.com'
  // }, ...

});

app.get('/users', function (request, response) {
  response.render('users', { users : users} );
});

app.get('/search', function (request, response) {
  response.render('search');
});

app.post('/search', urlencodedParser, function (request, response) {
  console.log(request.body)
  response.render('search-success', {data: request.body, users : users} );
});

app.get('/add-user', function (request, response) {
  response.render('add-user');
});

app.post('/users', urlencodedParser, function (request, response) {

  fs.readFile('users.json', 'utf8', function (err, data) {

    if (err) throw err;

    users.push(request.body);

    fs.writeFile('users.json', JSON.stringify(users), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    response.render('users', {users : users} );

  });

});

app.listen(3000, function(){
  console.log('Server is running on port 3000');
});

// options --> set/get/use/listen

//set ->
//get ->
//post ->
//use ->
//listen ->
