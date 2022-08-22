const express = require('express')
const cors = require('cors')
const path = require('path')

const router = require('./src/routes')

const{json, urlencoded} = express;
const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded({extended: false}))

const corsOptions = {
    origin: '*',
    optiosSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(router);

app.use('/inicio',(req,res) => {
    res.sendFile(path.join(__dirname+'/src/html/index.html'));
})

app.use('/',(req, res) => {
    res.send("Este es el microservicio 1 y versión v1.0.0")
})
app.listen(port, () => {
    console.log('Server listening on port ${port}');
} )