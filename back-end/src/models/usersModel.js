const connection = require('../config/connection');
const queryExecuter = require('../helpers/queryExecuter');

module.exports = {
    insert(usuario, email, senha, nomeCompleto) {
        return queryExecuter(connection, "INSERT INTO users (usuario, email, senha, nomeCompleto) VALUES (?, ?, ?)", [usuario, email, senha, nomeCompleto])
    },

    login(nome_usuario, senha){    
        console.log(nome_usuario, senha);    
        let sql = queryExecuter(connection, "SELECT nome_usuario, senha FROM users where nome_usuario = ? and senha = ?", [nome_usuario, senha]);         
        if (sql == null) {             
            return res.status(400).send('Não foi possível encontrar o usuário')         
        }         
        try {             
            return queryExecuter(connection, sql, [nome_usuario, senha])         
        } catch {             
            res.status(500).send()         
        }
    },

    getAll() {
        return queryExecuter(connection, "SELECT * FROM users", [])
    },

    getById(id) {
        return queryExecuter(connection, "SELECT * FROM users WHERE id = ?", [id])
    },

    delete(id) {
        try {
            return queryExecuter(connection, "DELETE FROM users WHERE id = ?", [id]);
        } catch(e) {
            throw e;
        }
    }
}