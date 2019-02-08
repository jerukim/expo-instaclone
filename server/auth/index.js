const router = require('express').Router();
const { User } = require('../db/models/');
module.exports = router;

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const loginType = username.includes('@') ? 'email' : 'username';

    const user = await User.findOne({
      where: { [loginType]: username },
    });

    if (!user) {
      console.log('No such user found:', username);
      res.status(401).send({
        title: `Incorrect Username`,
        text: `The username you entered doesn't appear to belong to an account. Please check your username and try again.`,
      });
    } else if (!user.correctPassword(password)) {
      console.log('Incorrect password for user:', username);
      res.status(401).send({
        title: `Incorrect password for ${username}`,
        text: `The password you entered is incorrect.
        Please try again.`,
      });
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    console.log('signup request body', req.body);
    const user = await User.create(req.body);
    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (err) {
    next(err);
  }
});
