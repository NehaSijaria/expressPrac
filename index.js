const express = require('express');
const path = require('path'); //to deal with filepath
const moment = require('moment') //for current date
const members = require('./Members')
//Init express
const app = express();

const logger = (req, res, next) => {
  //console.log('hello');
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
  next();
}

//Init middleware
app.use(logger);

//Gets all members
app.get('/api/members', (req,res) => res.json(members)
)

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>{
  console.log(`app listening on localhost:${PORT}`)
})
//npm run dev or nodemon index
