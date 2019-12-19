const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = express.Router()

// user
router.get('/user', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// movies
// ...

module.exports = router;
