// module.exports = (app) => {
//     const PracticeController = require("../../Controller/AdminController/CourseController.js")

//     const router = require("express").Router();
  
//     //get api
//     router.get("/",  PracticeController.);

//     app.use("/admin", router);
//   };

const router = require("express").Router();

const {
    GetAllEmployees,
    AddEmployees
} = require("../../Controller/PracticeController/PracticeController");

router.get("/employee", GetAllEmployees);
router.post("/employee", AddEmployees);
module.exports = router;