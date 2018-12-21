$(document).ready(function() {
    $("#blanks").submit(function(event) {

    var Question1 = $("input[name='Qestion1']:checked").val();    
    var Question2 = $("input[name='Qestion2']:checked").val();
    var Question3 = $("input[name='Qestion3']:checked").val();
    var Question4 = $("input[name='Qestion4']:checked").val();

    var total= 0;

    if (Question1===15){
        total+=15;
    }
    if (Question2===15){
        total+=15;
    }
      if (Question3===15){
          total+=15;
      } 
     if (Question4===15){
         total+=15;
     }
    $(".final").show();
    $("#display").text("Your final result: " + total)
     event.preventDefault();  
    });
    
});



        