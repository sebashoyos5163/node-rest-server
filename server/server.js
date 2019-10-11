const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
    res.json({
        "mensaje":"metodo get"
    })
});

app.post('/usuarios', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok:false,
            "mensaje":"el nombre es necesario"
        })
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuarios/:id', (req, res) => {
    res.send('delete');
});
app.listen(process.env.PORT);