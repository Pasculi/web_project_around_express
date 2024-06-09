const express = require('express');
const mongoose = require('mongoose');
const { PORT = 3000 } = process.env;
const app = express();


const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

mongoose.connect('mongodb://localhost:27017/aroundb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log("MongoDB connect successfully"))
.catch(err=> console.error("Mongo connection error",err))

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
