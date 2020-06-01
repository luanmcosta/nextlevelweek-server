import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    let o = {
        nome: 'Costa',
        idade: 22
    }
    response.json(o)
});

app.listen(3333);