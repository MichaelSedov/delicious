const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const michael = {name: 'Michael', age: 25, cool:true}
  // res.send('Hey! It works!');
  // res.json(michael);
  // res.send(req.query.name);
  res.render('hello', {
    name: 'Michael',
    dog: 'sniakers'
  })
});

module.exports = router;
