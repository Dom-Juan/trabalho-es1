'use strict'
const userModel = require('../models/usersModel');

module.exports = {

    async insert(req, res) {
        try {
            const user = await userModel.getByEmail(req.body.email);

            if(user.length !== 0) {
                return res.json({msg:'User already exists'})
            }

            const newUser = await userModel.insert(req.body);

            return res.json(newUser);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'internal server error' });
        }
    },

    async index(req, res) {
        try {
            const response = await userModel.getAll();
            if(response) return res.status(200).json({users: response});
        } catch(erro) {
            console.log(error);
            return res.status(500).json({ msg: 'internal server error' });
        }
    },

   async getById(req, res) {
        try {
            const response = await userModel.getById(req.userID);
            if(response) return res.status(200).json(response);
        } catch(erro) {
            console.log(error);
            return res.status(500).json({ msg: 'internal server error' });
        }
    },

}
