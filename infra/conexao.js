const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'dba',
    password: '1234',
    database: 'livros'
})

conexao.connect()

export default conexao