const express = require('express')
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions))

app.get('/', async (req, res) => {
  let resp = req.query.message
  // let resp = req.query.message
  if (resp == undefined){
    res.send('Hello')
  }
  else
  res.json({'text' : resp + '123'})
});

app.listen(8000, () => {
  console.log('Express server initialized');
});