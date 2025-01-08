import app from '../server.js'
import conexao from '../infra/conexao.js'

app.use(express.json())

app.get('/livros', (req, res) => {
    conexao.query('SELECT * FROM livros', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})