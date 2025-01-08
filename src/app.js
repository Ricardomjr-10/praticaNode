import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/livros', (req, res) => {
    const sql = 'SELECT * FROM livros'
    conexao.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/livros', (req, res) => {
    const livro = req.body
    const sql = 'INSERT INTO livros SET ?'
    conexao.query(sql, livro, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })

})

export default app