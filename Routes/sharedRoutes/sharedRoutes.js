module.exports = (app) => {
    const UsersController = require("../../Controller/sharedController/UsersController.js");

    const router = require("express").Router();
  
    //insert course
    router.post("/",  UsersController.create);

    app.use("/user", router);
  };