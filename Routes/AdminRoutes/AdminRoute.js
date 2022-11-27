module.exports = (app) => {
    const CourseController = require("../../Controller/AdminController/CourseController.js")

    const router = require("express").Router();
  
    //insert course
    router.post("/",  CourseController.create);

    app.use("/admin", router);
  };