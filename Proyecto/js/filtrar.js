$(document).ready(function () {
    //Marca filtrador
  
    $("#cboxmarca1").on("change", function () {
      if ($(this).is(":checked")) {
        if ($("#cboxmarca1").prop("checked")) {
          var catProduct = $("#cboxmarca1").attr("categoriaMarca");
          console.log(catProduct);
          $(".card-producto").css("transform", "scale(0)");
          function hideProduct() {
            $(".card-producto").hide();
          }
  
          function showProduct() {
            $('.card-producto[categoriaMarca="' + catProduct + '"]').show();
            $('.card-producto[categoriaMarca="' + catProduct + '"]').css(
              "transform",
              "scale(1)"
            );
          }
          setTimeout(showProduct, 400);
        }
      }
    });
  
    $("#cboxmarca2").on("change", function () {
      if ($(this).is(":checked")) {
        if ($("#cboxmarca2").prop("checked")) {
          var catProduct = $("#cboxmarca2").attr("categoriaMarca");
          console.log(catProduct);
          $(".card-producto").css("transform", "scale(0)");
          function hideProduct() {
            $(".card-producto").hide();
          }
  
          function showProduct() {
            $('.card-producto[categoriaMarca="' + catProduct + '"]').show();
            $('.card-producto[categoriaMarca="' + catProduct + '"]').css(
              "transform",
              "scale(1)"
            );
          }
          setTimeout(showProduct, 400);
        }
      }
    });
  
    $("#cboxmarca3").on("change", function () {
      if ($(this).is(":checked")) {
        if ($("#cboxmarca3").prop("checked")) {
          var catProduct = $("#cboxmarca3").attr("categoriaMarca");
          console.log(catProduct);
          $(".card-producto").css("transform", "scale(0)");
          function hideProduct() {
            $(".card-producto").hide();
          }
  
          function showProduct() {
            $('.card-producto[categoriaMarca="' + catProduct + '"]').show();
            $('.card-producto[categoriaMarca="' + catProduct + '"]').css(
              "transform",
              "scale(1)"
            );
          }
          setTimeout(showProduct, 400);
        }
      }
    });
  
    $("#cboxmarca4").on("change", function () {
      if ($(this).is(":checked")) {
        if ($("#cboxmarca4").prop("checked")) {
          var catProduct = $("#cboxmarca4").attr("categoriaMarca");
          console.log(catProduct);
          $(".card-producto").css("transform", "scale(0)");
          function hideProduct() {
            $(".card-producto").hide();
          }
  
          function showProduct() {
            $('.card-producto[categoriaMarca="' + catProduct + '"]').show();
            $('.card-producto[categoriaMarca="' + catProduct + '"]').css(
              "transform",
              "scale(1)"
            );
          }
          setTimeout(showProduct, 400);
        }
      }
    });
  
    $("#cboxmarca5").on("change", function () {
      if ($(this).is(":checked")) {
        if ($("#cboxmarca5").prop("checked")) {
          var catProduct = $("#cboxmarca5").attr("categoriaMarca");
          console.log(catProduct);
          $(".card-producto").css("transform", "scale(0)");
          function hideProduct() {
            $(".card-producto").hide();
          }
  
          function showProduct() {
            $('.card-producto[categoriaMarca="' + catProduct + '"]').show();
            $('.card-producto[categoriaMarca="' + catProduct + '"]').css(
              "transform",
              "scale(1)"
            );
          }
          setTimeout(showProduct, 400);
        }
      }
    });
  
    $("#cboxmarca6").on("change", function () {
      if ($(this).is(":checked")) {
        if ($("#cboxmarca6").prop("checked")) {
          var catProduct = $("#cboxmarca6").attr("categoriaMarca");
          console.log(catProduct);
          $(".card-producto").css("transform", "scale(0)");
          function hideProduct() {
            $(".card-producto").hide();
          }
  
          function showProduct() {
            $('.card-producto[categoriaMarca="' + catProduct + '"]').show();
            $('.card-producto[categoriaMarca="' + catProduct + '"]').css(
              "transform",
              "scale(1)"
            );
          }
          setTimeout(showProduct, 400);
        }
      }
    });
  
    $(".card-producto").show();
  
    $("input:checkbox:checked").each(function () {});

  });