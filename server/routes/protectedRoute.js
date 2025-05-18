const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ID ${req.user.id}! This is a protected route.` });
});

module.exports = router;
