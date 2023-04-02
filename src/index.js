const express = require('express');
const mysql = require('mysql2');

const app = express();
// methode dalam routing
//app.methode(path, handler);


const userRoutes = require('./routes/user.js');

const middlewareLogReq = require('./middleware/logs');

// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'express_mysql'
  });

app.use(middlewareLogReq);

app.use(express.json())

app.use("/user", userRoutes);

app.use('/', (req, res) => {
    dbPool.execute('SELECT * FROM user', (err, rows) => {
        if(err){
            console.log(err)
            return res.json({
                message: 'connection to db is failed...',
            })
        } 
        return res.json({
            message: 'connection to db is okey...',
            data: rows,
        })
    })
});

app.listen(4000, () => {
    console.log('server is running...')
});
