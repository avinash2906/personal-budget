const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('/', express.static("public"));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('budgetData.json', 'utf8', (err, data) => {
      const budget = JSON.parse(data);
      res.json(budget);
    });
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});