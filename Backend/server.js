const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 4200;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

//database connection 
const Url ='mongodb://localhost:27017/allinclusive'
mongoose.connect(Url,{
 useMongoClient:true,
})
const Connection = mongoose.connection ;
Connection.on('error',console.error.bind(console,'connection error:'))
Connection.once('open',function(){
console.log('Database is connected ')
})

//Routes middlewares
app.use('/api/user', require('././server/routes/auth.js'));
app.use('/api/event',require('././server/routes/events.js'));
app.use('/api/company', require('././server/routes/company.js'));
app.use('/api/seller',require('././server/routes/company.js'));
app.use('/api/userevent',require('././server/routes/userevent.js'));
app.use('/api/message',require('././server/routes/messages.js'));





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});