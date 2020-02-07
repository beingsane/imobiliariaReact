const Imovel = require('../models/Imovel')
const { sendMessage, findConnections } = require ('../websocket')

module.exports = {
    async index (request, response) {
        const imoveis = await Imovel.find()

        return response.json(imoveis)
    },

    async store (request, response) {
        const { titulo, categoria, area_total, localizacao, preco, detalhes} = request.body
        const { filename } = request.file;

        let imovel = await Imovel.findOne({ titulo })

        if (!imovel) {
            
            imovel = await Imovel.create ({
                titulo,
                categoria,
                area_total,
                localizacao,
                preco,
                detalhes,
                imagens: filename,
            })

            const sendSocketMessageTo = findConnections(
                localizacao, categoria,
            )

            sendMessage(sendSocketMessageTo, 'new-imovel', imovel)
        }

        return response.json(imovel)

    }
}