class carrito1{

    leerTotal(){
        document.getElementById("stotal").innerHTML = localStorage.totalCarrito;
        document.getElementById("total").innerHTML = localStorage.totalCarrito;
    }

    obtenerEvento(e) {
        e.preventDefault();
        let tranporte;
        let re = 0;
        let subtotal = localStorage.totalCarrito;
        if (e.target.classList.contains('movil')) {
            tranporte = e.target.value;
            document.getElementById("transp").innerHTML = "S/. " + tranporte;
            re = Number(tranporte) + Number(subtotal);
            document.getElementById("total").innerHTML = re.toFixed(2);

            
        }
        else {
            console.log("click afuera");
        }
    }

}

const total = new carrito1();
const pagar = document.getElementById('btn-pagar');
const radio = document.getElementById('cuad-envio');


cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', total.leerTotal());
    pagar.addEventListener('click',procesarPago);
    radio.addEventListener('change', (e) => { total.obtenerEvento(e) });
}

function procesarPago() {
    Swal.fire({
        type: 'success',
        title: 'Compra Exitosa!!',
        text: 'Se le redijirara a la tienda, gracias por su compra',
        showConfirmButton: false,
        timer: 3000
    }).then(function () {
        window.location = "shop.html";
    })
    localStorage.clear();
      
}

