const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => {
    console.log('Starting the Server');
    console.log(`App listening at http://localhost:9000`);
    console.log(`App listening at http://192.168.0.115:9000`);
});