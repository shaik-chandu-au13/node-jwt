const express = require('express');
const bodyParser = require('body-parser');

const InitMongo = require('./config/mongo-db');
InitMongo();

const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');

const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const app = express();

const swaggerAPIDesc = swaggerJsDoc({
    swaggerDefinition:{
        info:{
            title: 'Swagger test',
            version: '1.0'
        }
    },
    apis : ['src/routes/user.js']
})
app.use('/swagger',swaggerUI.serve, swaggerUI.setup(swaggerAPIDesc));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = process.env.PORT || 5005;

app.get('/',(req,res)=>{
    res.send('Welcome');
});


app.use('/api/user', userRoutes);
app.use('/api/user/todo', todoRoutes);

app.use((err,req,res,next)=>{
    console.log(err);
    return res.send('error happened 2');
});

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`);
});
