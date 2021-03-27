const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const users = ['Shuvo', 'Promoth', 'Paritosh', 'Rahul', 'Dipu'];
app.use(cors());
app.get('/', (req, res) => {
    const developer = {
        name:'shuvo',
        age : 22,
        sex: 'male'
    }
    res.send(developer);
})
app.get('/job',(req, res) => {
    res.send({job: 'software developer', salary:500000, location: 'Dhaka'})
})
app.get('/job/gf',(req, res) => {
    res.send({gf: 'Tumpa Rani', salary:500000, location: 'Dhaka'})
})
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id)
    const name = users[id];
    console.log(name)
    res.send({id, name})
})
app.listen(port,() => console.log('Listening to port ' + port ))