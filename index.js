// const cookieParser = require('cookie-parser');
const express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const app = express();


var schemaName = new Schema({
    request: String,
    time: Number
    }, {
    collection: 'collectionName'
    });


    var Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("we're connected!");
Model.save;
});
app.use(express.static("./"));

app.get('/', (request, response) => {
    console.log(request.body);
    response.render(index.html);
    res.cookie('username', 'Ashie lolo', { maxAge: 900000, httpOnly: true });
});
app.post('/mail', (request, response) => {
    console.log(request.body);

    })

app.listen(8080, 'localhost', ()=>{
    console.log('server strated')
});