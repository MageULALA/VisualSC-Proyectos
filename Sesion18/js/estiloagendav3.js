function guardarDato(){
    //creo variables y capturo los datos
    const nombre=document.getElementById("nombre").value;
    const movil=document.getElementById("movil").value;
    const email=document.getElementById("email").value;
    
    const datos = {
        'movil': movil,
        'email': email,
    };

    //Almacenamiento los datos
    localStorage.setItem(nombre, JSON.stringify(datos));

    //Limpiando los campos
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    actualizarDatos();
}

function recuperarDato(){
    var nombre=document.getElementById("nombre").value;
    var datosIndex=JSON.parse(localStorage.getItem(nombre));

    document.getElementById("movil").value=datosIndex.movil;
    document.getElementById("email").value=datosIndex.email;
}

function eliminarDato(){
    var nombre=document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro="";
    if(localStorage.length===0){
        registro += '<li>Vacío</li>'
    } else{
        for (var i=0; i<=localStorage.length-1;i++){
            var key= localStorage.key(i);
            var datosIndex=JSON.parse(localStorage.getItem(key));
            
            registro += '<li>'+ 
            '<span class="nom">' + key + '</span>' +
            ' &nbsp <span class="nom">' + datosIndex.movil + '</span>'+
            ' &nbsp <span class="nom">' + datosIndex.email + '</span>'+
             '</li> <br>';
        }
    }
    document.getElementById('contactos').innerHTML=registro;
}

