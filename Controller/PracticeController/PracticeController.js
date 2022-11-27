const {MysqlPool} = require("../../DBconnection/DBconnection");

const GetAllEmployees =  (req, res) => {
  let sql = "SELECT * FROM employee";
  MysqlPool.query(sql, function(err, result) {
    if(err) throw err ;
    res.send(result)
  })
}

const AddEmployees =  (req, res) => {
  const employeeData = req.body;
  let sql = `INSERT INTO employee (id, Name, City, Position, Salary, country) VALUES ('${employeeData.id}', '${employeeData.Name}', '${employeeData.City}', '${employeeData.Position}','${employeeData.Salary}','${employeeData.Country}')`;
  MysqlPool.query(sql, function(err, result) {
    if(err) throw err ;
    res.send({success: 'data added successfully'})
  })
}

  
module.exports = {
  GetAllEmployees,
  AddEmployees
  };
  