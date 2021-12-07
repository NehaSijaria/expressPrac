const express = require('express');
const PORT = 5001;

//Init express
const app = express();

//endpoints/route handler to homepage/Index page
app.get('/', (req,res) => { 
  res.send('<h1>Welcome, homepage in html</h1>') //res in html
  //res.send('Welcome home page'); // res in txt
})
//Server listening
app.listen(PORT, ()=>{
  console.log(`app listening on localhost:${PORT}`)
})

