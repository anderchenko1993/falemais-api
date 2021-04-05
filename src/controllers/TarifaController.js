const { Tarifa } = require('../models');
const { Plano } = require('../models');

class TarifaController {

    async calculo(req, res) {
        const { origem, destino, plano: plano_id, minutos } = req.body;

        const tarifa = await Tarifa.findOne({
            where: { origem, destino, plano_id }, 
            include: Plano,
        });

        if(!tarifa) {
            return res.status(401).json({ error: "Não foi possível calcular os valores das tarifas!" });
        }

        const valores = {
            comPlano: null,
            semPlano: null,
        };

        if(tarifa.Plano.minutos >= minutos) {
            valores.comPlano = 0.00;
        }
        else {
            const taxaAdicional = (tarifa.valor * 0.10) + tarifa.valor;
            valores.comPlano = (minutos - tarifa.Plano.minutos) * taxaAdicional;   
        }

        valores.semPlano = minutos * tarifa.valor;

        return res.json(valores);
    }
}

module.exports = new TarifaController;

