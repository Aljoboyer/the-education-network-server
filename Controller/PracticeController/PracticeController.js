const {MysqlPool} = require("../../DBconnection/DBconnection");

const GetAllEmployees =  (req, res) => {
  let sql = "SELECT * FROM employee";
  // let sql = "SELECT * FROM employee Limit 3";
  // let sql = "SELECT * FROM employee ORDER BY id DESC";
  // let sql = "SELECT * FROM employee ORDER BY RAND()";
  // let sql = "SELECT * FROM employee WHERE id in (502, 3333, 79, 5)";
  // let sql = "SELECT * FROM employee WHERE id BETWEEN '5' AND '400'";
 
  MysqlPool.query(sql, function(err, result) {
    if(err) throw err ;
    res.send(result)
  })
}

const AddEmployees =  (req, res) => {
  const employeeData = req.body;
  let sql = `INSERT INTO employee (id, Name, City, Position, Salary, country) VALUES ('${employeeData.id}', '${employeeData.Name}', '${employeeData.City}', '${employeeData.Position}','${employeeData.Salary}','${employeeData.Country}')`;
  try {
    MysqlPool.query(sql, function(err, result) {
      if(err){
        res.send({error: 'Id already Added, Please Try New One'})
      }
      else{
        res.send({success: 'data added successfully'})
      }
     
    })
  } catch (error) {
    console.log('Error')
  }

}

const DeleteEmployees =  (req, res) => {

  let sql = `DELETE FROM employee WHERE id = '${req.params.id}'`
  MysqlPool.query(sql, function(err, result) {
    if(err) throw err ;
    res.send({success: 'data delted successfully'})
  })
}

const getEmployeeByID =  (req, res) => {

  let sql = `SELECT * FROM employee WHERE id = '${req.params.id}'`
  MysqlPool.query(sql, function(err, result) {
    if(err) throw err ;
    res.send(result)
  })
}

const UpdateEmployee = (req, res) => {
  const data = req.body
  const sql = `UPDATE employee SET Name = '${data.name}', City = '${data.city}', Position = '${data.position}', Salary = '${data.salary}', country = '${data.country}' WHERE id = ${req.params.id}`;
  MysqlPool.query(sql, function(err, result) {
    if(err) throw err ;
    res.send(result)
  })
}

const getUniqueCategory = (req, res) => {
    
    let sql = 'SELECT DISTINCT Position FROM employee'
    MysqlPool.query(sql, function(err, result) {
      if(err) throw err ;
      res.send(result)
    })
}

module.exports = {
  GetAllEmployees,
  AddEmployees,
  DeleteEmployees,
  getEmployeeByID,
  UpdateEmployee,
  getUniqueCategory
  };
  