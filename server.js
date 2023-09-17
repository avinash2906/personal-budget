const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('/', express.static("public"));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// app.get('/budget', (req, res) => {
//     res.json(budget);
// })

app.get('/budget', (req, res) => {
    fs.readFile('budgetData.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to read budget data' });
        return;
      }
      // Parse the JSON data
      const budget = JSON.parse(data);
      // Send the budget data as a JSON response
      res.json(budget);
    });
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});