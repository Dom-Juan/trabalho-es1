const connection = require('../config/connection');
const queryExecuter = require('../helpers/queryExecuter');


module.exports = {
    insert(id_coordenador, tipo_curso, semestre, aprovacao_grad, aprovacao_opt, conceitos, reprova_total, reprova_ultimo_semestre, aprova_proef, exame_quali, limite_quali, limite_tese, artigos_aceito, artigos_aguardando, estagio_artigo_submissao, estagio_pesquisa, participou_congresso_nacional,participou_congresso_exterior,participou_pesquisa_exterior,algo_declarar, id_aluno) {
        const query  = "INSERT INTO informacoes_aluno";
        query +="(id_coordenador, tipo_curso, semestre, aprovacao_grad, aprovacao_opt, conceitos, reprova_total, reprova_ultimo_semestre, "
            "aprova_proef, exame_quali, limite_quali, limite_tese, artigos_aceito, artigos_aguardando, estagio_artigo_submissao, estagio_pesquisa, "
            "participou_congreso_nacional, participou_congresso_exterior, participou_pesquisa_exterior, algo_declarar, id_aluno) "
            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        return queryExecuter(connection, 
            query, 
            [id_coordenador, tipo_curso, semestre, aprovacao_grad, aprovacao_opt, conceitos, reprova_total, reprova_ultimo_semestre, aprova_proef, exame_quali, limite_quali, limite_tese, artigos_aceito, artigos_aguardando, estagio_artigo_submissao, estagio_pesquisa, participou_congresso_nacional,participou_congresso_exterior,participou_pesquisa_exterior,algo_declarar, id_aluno])
    },

    getAll() {
        return queryExecuter(connection, "SELECT * FROM informacoes_aluno", [])
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