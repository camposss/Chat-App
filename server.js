const express= require('express');
const PORT = process.env.port || 9000;
const app = express();

app.get('/', (req, res)=> {
    res.send('<h1>App is working</h1>');
});

app.listen(PORT, () =>{
    console.log('server running on port: ' + PORT);
});