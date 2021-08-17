const connection = require('../config/connection');
const queryExecuter = require('../helpers/queryExecuter');



module.exports = {
    insert({nome_usuario, email, senha, nome, numero_usp, tipo_usuario}) { 
        console.log(nome_usuario)
        return queryExecuter(connection, "INSERT INTO users (nome_usuario, email, senha, nome, numero_usp, tipo_usuario) VALUES (?, ?, ?, ?, ?, ?)", [nome_usuario, email, senha, nome, numero_usp, tipo_usuario])
    },

    getAll() {
        return queryExecuter(connection, "SELECT * FROM users", [])
    },  

    getById(id) {
        return queryExecuter(connection, "SELECT * FROM users WHERE id = ?", [id])
    },

    getByEmail(email) {
        console.log(email);
        return queryExecuter(connection, "SELECT * FROM users WHERE email = ?", [email])
    },

    delete(id) {
        try {
            return queryExecuter(connection, "DELETE FROM users WHERE id = ?", [id]);
        } catch(e) {
            throw e;
        }
    }
}