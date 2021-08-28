
$(document).ready(function(){
  $(".collapse.show").each(function(){
$(this).prev(".card-header").find(".far").addClass("fa-minus-square").removeClass("fa-plus-square");
  });

  $(".collapse").on("show.bs.collapse",function(){
    $(this) .prev(".card-header") .find(".far").removeClass("fa-plus-square").addClass("fa-minus-square");
  }).on("hide.bs.collapse",function(){
     $(this).prev(".card-header").find(".far").removeClass("fa-minus-square").addClass("fa-plus-square");

  })
})