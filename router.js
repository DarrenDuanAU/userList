const express = require('express');
const router = express.Router();

let users = [
  {name: 'Ben', age: '20' },
  {name: 'John', age: '30' },
  {name: 'Chris', age: '40' },
  {name: 'Jane', age: '50' },
];

//create APIs

//get user list   /api/users
router.get('/api/users', (req, res) => {
  res.send({
    msg: "get user succeed",
    data: users,
  });
});

// post user    /api/user


//delete users    /api/delete


module.exports = router;