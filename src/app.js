import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/livros', (req, res) => {
    conexao.query('SELECT * FROM livros', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

export default app