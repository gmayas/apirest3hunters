// Models
const Users = require('../models/user');

// Get all users
const getUsers = async ( req, res) => {
    try {
      let dataRetur = {};
      const users = await Users.find({}).sort({_id: -1});
      dataRetur = {
        users,
        message: "Query Success", 
        Ok: true
      }
      res.json(dataRetur);
    } catch (e) {
      console.log(e);
      dataRetur = {
        users,
        message: "Error in query:" + e, Ok: false
      }
      res.json(dataRetur);
    }
  };

  const createUser = async ( req, res) => {
    try {
      let dataRetur = {};
      const body = req.body;
      let newUser = new Users({
        name: body.name,
        age: body.age,
        city: body.city
      });
      await newUser.save((err, data) => {
        if (err) {
          console.log("Error addNewUser", err);
        } else {
          console.log("Data addNewUser Ok", data);
        }
      });
      dataRetur = {
        newUser,
        message: "Data addNewUser Ok", Ok: true
      }
      res.json(dataRetur);
    } catch (e) {
      console.log(e);
      dataRetur = {
        newUser,
        message: "Error addNewUser:" + e, Ok: false
      }
      res.json(dataRetur);
    }
  };
  
  //Export methods
  module.exports = { getUsers, createUser };