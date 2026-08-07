require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const health = require('./src/routes/health');
const users = require('./src/routes/users');
const errorHandler = require('./src/middleware/error');

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json({ limit: '100kb' }));

app.use('/health', health);
app.use('/users', users);

app.get('/', (req, res) => {
  res.type('text/plain').send('clean baseline ok');
});

app.use(errorHandler);

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`clean baseline listening on ${PORT}`);
});
