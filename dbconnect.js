var mysql = require('mysql');



var con = mysql.createConnection({
  //host: '127.0.0.1',
  host: 'localhost',
  user: 'root',
  password: '2022',
  port: '3306',
  database: 'shop'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var statement="SELECT * FROM branch"; 
  con.query(statement, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    console.log(JSON.stringify(result));// use stringify-method converts a JavaScript object
                                        // or value to a JSON string, 
  });
});


// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';