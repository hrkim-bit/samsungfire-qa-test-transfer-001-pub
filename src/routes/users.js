const router = require('express').Router();
const { isPositiveInt, sanitizeName } = require('../lib/validate');

const users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'bob' }
];

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if (!isPositiveInt(id)) {
    return res.status(400).json({ error: 'invalid id' });
  }
  const user = users.find((u) => u.id === Number(id));
  if (!user) return res.status(404).json({ error: 'not found' });
  res.json(user);
});

router.post('/', (req, res) => {
  const name = sanitizeName(req.body && req.body.name);
  if (!name) return res.status(400).json({ error: 'invalid name' });
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
