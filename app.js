const express = require('express')

const app = express();

app.get('/', async (req, res) => {
  let resp = req.query.message
  // let resp = req.query.message
  if (resp == undefined){
    res.send('Hello')
  }
  else
  res.send(resp + '123')
});

app.listen(8000, () => {
  console.log('Express server initialized');
});