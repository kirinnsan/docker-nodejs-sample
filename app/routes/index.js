let router = require('express').Router();

router.get('/', (req, res) => {
  res.render('./index.ejs', {title: 'Node.js + MySql+ Dockerのサンプル'});
});

module.exports = router;