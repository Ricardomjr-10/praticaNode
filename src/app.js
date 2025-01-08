import app from './app.js'
import conexao from '../infra/conexao.js'

app.get('/livros', (req, res) => {
    conexao.query('SELECT * FROM livros', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})