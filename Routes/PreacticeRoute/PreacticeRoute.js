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
    AddEmployees,
    DeleteEmployees,
    getEmployeeByID,
    UpdateEmployee,
    getUniqueCategory,
    uploadImage,
    GetImages,
    GetTwoTableData
} = require("../../Controller/PracticeController/PracticeController");

router.get("/employee", GetAllEmployees);
router.post("/employee", AddEmployees);
router.delete("/employee/:id", DeleteEmployees);
router.get("/employee/:id", getEmployeeByID);
router.put("/employee/:id", UpdateEmployee);
router.get("/category", getUniqueCategory);
router.post("/upload", uploadImage);
router.get("/GetImages", GetImages);
router.get("/GetTwoTableData", GetTwoTableData);


module.exports = router;

