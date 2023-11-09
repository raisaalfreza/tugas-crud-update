require("dotenv").config()
const express = require ('express');

const usersRoutes = require('./routes/buku.js');

const misddlewareLogRequest = require('./middleware/logs.js');



const app = express();

app.use(misddlewareLogRequest);
app.use(express.json());


app.use('/buku', usersRoutes);


app.listen(4000, ()=>{
    console.log('server berhasil di runing di port 4000');
})