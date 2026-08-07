const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.get('/ready', (req, res) => {
  res.json({ ready: true });
});

module.exports = router;
