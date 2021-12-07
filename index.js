const express = require('express');
const path = require('path'); //to deal with filepath
const PORT = process.env.PORT || 5001;
//look at envVar (when we deploy we look at env else 5000)

//Init express
const app = express();
//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//endpoints/route handler to homepage/Index page
// app.get(//Fetch from db,Load pages,return json,full access to eq,res)res=>http.res(render template,send json data, redirect,send data,file)
app.get('/', (req,res) => { 
  res.send('<h1>Welcome, homepage in html</h1>') //res in html
  //res.send('Welcome home page'); // res in txt
})

// app.get('/about', (req,res) => { 
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// }) //send html file in public>index.html
//Server listening

app.listen(PORT, ()=>{
  console.log(`app listening on localhost:${PORT}`)
})
//npm run dev or nodemon index
