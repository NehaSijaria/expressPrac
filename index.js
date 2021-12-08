const express = require('express');
const path = require('path'); //to deal with filepath
const members = require('./Members');
const logger = require('./middleware/logger');
//Init express
const app = express();

//Init middleware - it will keep running with every request
app.use(logger);

//Gets all members
app.get('/api/members', (req,res) => res.json(members)
)
//get single member
app.get('/api/members/:id', (req,res) => {
  //return boolean
  const found = members.some(member => member.id === parseInt(req.params.id))
  //res.send(req.params.id) return id;
  //filter indiv member based on id
  //anything returned as "/:id" is string while member.id is a number
  if(found){
  res.json(members.filter(member => member.id === parseInt(req.params.id)))
} else {
  res.status(400).json({msg:`member with id:${req.params.id} not found`})
}
})

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>{
  console.log(`app listening on localhost:${PORT}`)
})
//npm run dev or nodemon index
