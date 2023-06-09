require('dotenv').config();

const PORT = process.env.PORT || 5000;;
const express = require('express');

const app = express();
// methode dalam routing
//app.methode(path, handler);

const userRoutes = require('./routes/user.js');

const middlewareLogReq = require('./middleware/logs');

app.use(middlewareLogReq);

app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log('server is running...')
});
