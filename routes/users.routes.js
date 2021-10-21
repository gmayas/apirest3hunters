const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/users.controller');

router.get("/", (req, res) => {
    res.send({ Response: "APIRest for 3Hunters working", By: "© 2021 Copyright: GMayaS C:\>Desarrollo en Sistemas." }).status(200);
  });

router.get("/users/getUsers", getUsers);
router.post("/users/createUser", createUser);

module.exports = router;


