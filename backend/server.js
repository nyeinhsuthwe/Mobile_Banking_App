const express = require('express');
require('dotenv').config()
const morgan = require('morgan')
const dataRoutes = require('./routes/data');
const userRoutes = require('./routes/users');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
const mongoURL = "mongodb+srv://nyeinhsuthwe57:jkjk97@pay-cluster.2gjhkkl.mongodb.net/?retryWrites=true&w=majority&appName=Pay-Cluster"
mongoose.connect(mongoURL).then(() => {
    console.log('connected to db');
    app.listen(process.env.PORT,() => {
        console.log('app is running on localhost:'+process.env.PORT);
    })
});

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.get('/', (req,res) => {
    return res.json({hello : 'world'});
});

app.use('/api/data',dataRoutes)
app.use('/api/users',userRoutes)

app.get('/set-cookie',(req,res)=>{
    res.cookie('name','MgMg')
    res.cookie('important-key','value',{httpOnly:true})
    return res.send('cookie already set')
})

app.get('/get-cookie',(req,res)=>{
    let cookies = req.cookies;
    return res.json(cookies)
})