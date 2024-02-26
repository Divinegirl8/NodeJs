require("dotenv").config();
const express = require('express');
const app = express();
const dbURL = process.env.MONGO_URI;
let Connect = require("./features/db/connectDB");
const port = 3000;
const router = require('./features/router/router');
const NotFound = require("./features/middleware/NotFound");

app.use(express.json());
app.use('/api/user',router);
app.use(NotFound)

Connect(dbURL).then(() =>{
app.listen(port,()=>{

    console.log(`app listening at port ${port}`)

})
}).catch((error)=>{
 console.log(error)
})

