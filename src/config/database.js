const mysql = require('mysql2');
// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'express_mysql'
  });

  module.exports =dbPool.promise();