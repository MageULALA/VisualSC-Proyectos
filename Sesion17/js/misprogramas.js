 //mostrar una ventaja emergente
 $(document).ready( function(){
    $("a").click(function(evento){
        alert("Has pulsado un enlace hacia una página externa: Pagina Usat")
    });

 });

 //ocultar o mostrar una caja
$("#bt1").click(
    function(){
    $("#cont1").toggle(1500);
    }
    , function(){
    $("#cont1").toggle(1500);
    }
);
