const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express();

const usersFilePath = path.join(__dirname, '../data', 'users.json');

router.get('/', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'An error has ocurred on the server' });
      return;
    }
    res.send(JSON.parse(data));
  });
});

router.get('/:id', (req, res) => {
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'An error has ocurred on the server' });
      return;
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (!user) {
      res.status(404).send({ message: 'User ID not found' });
      return;
    }
    res.send(user);
  });
});

module.exports = router;