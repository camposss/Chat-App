const express= require('express');
const PORT = process.env.port || 9000;
const mongoose= require('mongoose');
const keys= require('./config/keys');
const authRouter = require('./routes/auth_routes');
const cors= require('cors');
const app = express();

mongoose.connect(keys.db_connect).then(()=>{
    console.log('connected to MongoDB ');
}).catch(err=>{
    console.log('there was an error message ', err.message);
});

app.use(cors());
app.use(express.json());
authRouter(app);

app.get('/', (req, res)=> {
    res.send('<h1>App is working</h1>');
});

app.listen(PORT, () =>{
    console.log('server running on port: ' + PORT);
});