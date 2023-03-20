const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Hello world');
    res.send('Hello world');
});

app.listen(3000, () =>{
    console.log('Server lencé sur le port 3000');
});