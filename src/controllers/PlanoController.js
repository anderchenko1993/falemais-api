const { Plano } = require('../models');

class PlanoController {

    async index(req, res) {
        const planos = await Plano.findAll({
            attributes: ['id', 'descricao']
        }); 

        return res.json(planos);
    }
}

module.exports = new PlanoController;