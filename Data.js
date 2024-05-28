const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 1880; // Utilisez un seul port

let sensorData = {
  temperature: 0,
  gas: 0
};

app.use(bodyParser.json());

app.post('/data', (req, res) => {
  sensorData.temperature = req.body.temperature;
  sensorData.gas = req.body.gas;
  res.send('Data received');
  console.log(sensorData);
});

app.get('/data', (req, res) => {
  res.json(sensorData);
});

app.listen(port, () => {
  console.log(`Server running at http://192.168.0.78:${port}`);
});
