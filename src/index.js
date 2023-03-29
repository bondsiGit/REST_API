const express = require('express');

const app = express();
// methode dalam routing
//app.methode(path, handler);


const userRoutes = require('./routes/user.js')

const middlewareLogReq = require('./middleware/logs')

app.use(middlewareLogReq)

app.use("/user", userRoutes);

app.get("/", (req,res) => {
    res.send("try again...")
});

app.post("/", (req,res) => {
    res.send("Post methode...")
})

app.listen(4000, () => {
    console.log('server is running...')
});
