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

app.get('/livros/:id', (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM livros WHERE id = ?'
    conexao.query(sql, id, (err, result) => {
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

app.put('/livros/:id', (req, res) => {
    const id = req.params.id
    const livro = req.body
    const sql = 'UPDATE livros SET ? WHERE id = ?'
    conexao.query(sql, [livro, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

export default app