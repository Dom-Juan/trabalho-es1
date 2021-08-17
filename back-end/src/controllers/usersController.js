'use strict'
const userModel = require('../models/usersModel');

module.exports = {
    async index(req, res) {
        try {
            const response = await userModel.getAll();
            if(response) return res.status(200).json({users: response});
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    },

    async login(req, res){
        try{
            const response = await userModel.login(req.body.nome_usuario, req.body.senha);
            if(response) return res.status(200).json(response);

        }catch(e) {
            console.log(e);
            return res.status(400).json({msg: e});
        }
    }

}
