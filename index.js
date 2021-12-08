const express = require('express');
const path = require('path'); //to deal with filepath

const logger = require('./middleware/logger');
//Init express
const app = express();

app.use(express.json());

//body-parser middleware
app.use(express.urlencoded({ extended: false}))

//Init middleware - it will keep running with every request
app.use(logger);


//set static folder
app.use(express.static(path.join(__dirname, 'public')))
//route with api/members
app.use('/api/members',require('./routes/api/membes'))


const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>{
  console.log(`app listening on localhost:${PORT}`)
})
//npm run dev or nodemon index
