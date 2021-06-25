function guardarDato() {
    //creo variables y capturo los datos
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;
    const id = numeroSiguiente()
    if (nombre.length > 0 && movil.length > 0 && email.length > 0) {

        const datos = {
            'id': id,
            'movil': movil,
            'email': email,
        };
        console.log(datos);
        //Almacenamiento los datos
        localStorage.setItem(nombre, JSON.stringify(datos));
        //Limpiando los campos
        document.getElementById("nombre").value = "";
        document.getElementById("movil").value = "";
        document.getElementById("email").value = "";
        actualizarDatos();
    } else {
        alert("Ingrese todos los campos");
    }
}
function numeroSiguiente() {
    var mayor_valor = localStorage.length;
    return mayor_valor + 1
}
function recuperarDato() {
    var nombre = document.getElementById("nombre").value;
    var datosIndex = JSON.parse(localStorage.getItem(nombre));

    document.getElementById("movil").value = datosIndex.movil;
    document.getElementById("email").value = datosIndex.email;
}

function eliminarDato() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<td colspan=4>No hay contactos registrados</td>'
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var datosIndex = JSON.parse(localStorage.getItem(key));
            registro += 
            '<tr><th scope="row">'+datosIndex.id+'</th>'+
            '<td>'+key+'</td>'+
            '<td>'+datosIndex.movil+'</td>'+
            '<td>'+datosIndex.email+'</td>'+
            '</tr>'
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}
