const socketio = require('socket.io')

const connections = []
let io

exports.setupWebsocket = (server) => {
    io = socketio(server)

    io.on('connection', socket => {
        const { categoria, localizacao } = socket.handshake.query

        connections.push({
            id: socket.id,
            localizacao: localizacao,
            categoria: categoria,
        })

    }) 
}

exports.findConnections = (localizacao, categoria) => {
    return connections.filter(connections => {
        return connections.localizacao.some(item => localizacao.includes(item))
        && connections.categoria.some(item => categoria.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach( connection => {
        io.to(connection.id).emit(message, data)
    })
}