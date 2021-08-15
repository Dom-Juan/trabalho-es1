const connection = require('../config/connection');
const queryExecuter = require('../helpers/queryExecuter');

module.exports = {
    insert(usuario, email, senha, nomeCompleto) {
        return queryExecuter(connection, "INSERT INTO users (usuario, email, senha, nomeCompleto) VALUES (?, ?, ?)", [usuario, email, senha, nomeCompleto])
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