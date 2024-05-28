const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const cardsFilePath = path.join(__dirname, '../data', 'cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'An error has ocurred on the server' });
      return;
    }
    res.send(JSON.parse(data));
  });
});

module.exports = router;