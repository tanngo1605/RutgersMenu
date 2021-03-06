const express = require("express");
const app = express();
const cors = require('cors');
const foodRouter = require("./router/foodRouter") ;
const userRouter = require('./router/userRouter');
 var corsOptions = {
     //exposedHeaders:"Content-Range, X-Content-Range"
     //exposedHeaders:"X-Total-Count",
     exposedHeaders:"Content-Range",
     credentials: true
    
  };


  
app.use(cors(corsOptions));
/*app.use((req, res, next) =>{
    console.log(req.headers.cookie);
    next();
})*/
app.use(express.json());
app.use('/user', userRouter)
app.use('/food', foodRouter);


app.get('/', (req, res) =>{
    res.end('Hello World');
    console.log(req.body)
    
})
app.post('/', (req, res) =>{
    res.end('Hello World');
    console.log(req.body)
    
})

module.exports=app;

