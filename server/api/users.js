const router = require('express').Router();
const { User } = require('../db/models');

module.exports = router;

router.get('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/email', async (req, res, next) => {
  try {
    const { email } = req.body;
    const foundEmail = await User.findOne({ where: { email } });
    console.log('foundEmail', foundEmail);
    res.json(foundEmail);
  } catch (err) {
    next(err);
  }
});
