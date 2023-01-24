const mongoose = require("mongoose");
const mysql = require('mysql2');

// const connectDB = async () => {
//   const mongoUri = `mongodb+srv://${process.env.ID}:${process.env.PASS}@cluster0.0ytci.mongodb.net/EducationNetworkDB?retryWrites=true&w=majority`;
//   try {
//     await mongoose.connect(
//       mongoUri,
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//       },
//       console.log("connected to database")
//     );
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

const MysqlPool = mysql.createConnection({
    host: '127.0.0.1',
    database: 'learningphasetwo',
    user: 'root',
    password: 'Tanvir1233'
})

const connectMysqlDB = () => {
  MysqlPool.connect(function(err){
    if(err) throw err;
    console.log('Mysql database connected')
  })
}

module.exports = {connectMysqlDB, MysqlPool};
