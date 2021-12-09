const express = require('express');
const path = require('path'); //to deal with filepath
const ejs = require('ejs')
const logger = require('./middleware/logger');
//Init express
const app = express();
const members = require('./Members')

//set view engine to ejs => middleware for ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

//body-parser middleware - handle urlencoded data
app.use(express.json());//handle json data
app.use(express.urlencoded({ extended: false}))

app.get('/', (req,res) => {
  // res.render("index",{
  //   title:'member app'
  // }) or 
//   const tempVars = { title: "Members only App",
// members}
  // res.render("index", {tempVars: tempVars})
  res.render("index", {title:"hi", members})
})
// .render took 2 parama, file and templatevars
//Init middleware - it will keep running with every request
app.use(logger);


//set static folder
app.use(express.static(path.join(__dirname, 'public')))
//route with api/members
app.use('/api/members',require('./routes/api/membes'))


const PORT = process.env.PORT || 5001;
app.listen(PORT, (err)=>{
  if(err) console.log(err);
  console.log(`app listening on localhost:${PORT}`)
})
//npm run dev or nodemon index
