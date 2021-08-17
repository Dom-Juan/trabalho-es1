const Forms = require('../../models/formularioModel');

class FormsController {
  async store(req, res) {

    try {

      const forms = await Forms.insert(req.body);

      return res.status(200).json(forms);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }

  async get(req, res) {
    try {
      const getForms = await Forms.getById(req.params.id)

      if(!getForms) {
        return res.status(400).json({ msg: 'Forms dosent exists' });
      }

      return res.status(200).json(getForms);
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }
}

module.exports = new FormsController();