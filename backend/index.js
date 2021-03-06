const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Panot:panot2208',{useNewUrlParser:true,useUnifiedTopology:true});
const cors = require('cors');
const app = express();
const port = process.env.PORT | 80 ;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World') ;
    })

    app.get('/api', (req, res) => {
        res.json({ time: Date() }) ;
        })

app.listen(port, () =>{
    console.log('Server runing http://localhost');
});