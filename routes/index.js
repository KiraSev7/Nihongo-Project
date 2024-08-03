const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Welcome to the online learning platform!');
  } else {
    res.redirect('/auth/login');
  }
});

module.exports = router;
