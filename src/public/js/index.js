const socket = io()

socket.on('mensajeServidor', message => {
    console.log(message)
})
var buttonAdd = document.getElementById('button-add')
buttonAdd.addEventListener()
function cliked() {
    console.log("clikeado")
    socket.emit('agregarProducto', {producto})
}
