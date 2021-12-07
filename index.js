const express = require('express');
const path = require('path'); //to deal with filepath

//Init express
const app = express();




const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>{
  console.log(`app listening on localhost:${PORT}`)
})
//npm run dev or nodemon index
