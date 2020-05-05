let dbSetting = require('../config/mysql.config.js');
let router = require('express').Router();
let mysql = require('mysql');

router.get('/', (req, res) => {
  let connection = mysql.createConnection(dbSetting);

  connection.query('select * from city', (error, resuluts, fields) => {
    if (error) {
      console.error('error connecting: ' + error.stack);
      return;
    }
    console.log(resuluts);
    res.render('./city/index.ejs', { contents: resuluts })
  });
  connection.end();
})

module.exports = router;