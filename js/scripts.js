$(document).ready(function(){
    $("#leBtn").click(function(){
      $("div").filter("#venta").toggle(1000);
    });
  });
  $(document).ready(function(){
    $("#leBtn2").click(function(){
      $("div").filter("#arriendo").toggle(1000);
    });
});

$('select[id="dDown"]').change(function() {
 // alert();
 if($(this).val() == "2"){
/*    alert($(this).val()) */
   $("#man").attr("src","images/mujer.png")
 }else{
  $("#man").attr("src","images/hombre.png")
 }
 



 

});
/* $('select[id="dDown"]').change(function(){

  if ($(this).val() == "2"){
      alert("call the do something function on option 2");
   }        
});​ */

$(document).ready(function(){
  $("#con").click(function(){
    $("div").filter("#config").toggle(1000);
  });
});


// $("#nuevo_nom").hide();

// function cambiarn() {
//   let text = "";

//   if ($("#cnam").text() === "Cambiar nombre") {
//     $("#nuevo_nom").show();
//     text = "Cancelar";
//   } else {
//     $("#nuevo_nom").hide();
//     text = "Cambiar nombre";
//   }

//   $("#cnam").html(text);

// }

function cambio(){
  
  $(document).ready(function () {
    setTimeout(()=>{
      $("#perfil").text('Don antonio');
  
    }, 1000);
  });

}






