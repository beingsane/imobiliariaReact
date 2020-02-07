const mongoose = require('mongoose')


const ImovelSchema = new mongoose.Schema({
    titulo: String,
    categoria: String,
    area_total: String,
    localizacao: String,
    preco: String,
    detalhes: String,
    imagens: String,
},{
        toJSON: {
        virtuals: true,
        },
  })

  ImovelSchema.virtual('imagens_url').get(function() {
    return `http://localhost:3535/uploads/${this.imagens}`
  })

module.exports = mongoose.model('Imovel', ImovelSchema)
