import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Luan',
        'Carlos',
        'Alfred'
    ])
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Diego',
        email: 'luanwebdev@gmail.com'
    }

    return response.json(user)
})

app.listen(3333);