const Imovel = require('../models/Imovel')

module.exports = {
    async index(request, response) {

        const { categoria, localizacao} = request.query


        const imoveis = await Imovel.find({
            categoria: {
                $in: categoria,
            },
            localizacao: {
                $in: localizacao,
            },
        })

        return response.json({ imoveis })
    }
}