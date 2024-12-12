const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('products', { title: 'Our Products' });
});

module.exports = router;
