$(document).ready(function() {
    $("#blanks form").submit(function() {
    var varQuestion1 = $("input[name='Qestion1']:checked").val();    
    var varQuestion2 = $("input[name='Qestion2']:checked").val();
    var varQuestion3 = $("input[name='Qestion3']:checked").val();
    var varQuestion4 = $("input[name='Qestion4']:checked").val();
    var result= 0;
    if (Question1===15){
        result+=15;
    }
    if (Question2===15){
        result+=15;
    }
      if (Question3===15){
          result+=15;
      } 
     if (Question4===15){
         result+=15;
     }
        $("#story").show();
        event.preventDefault();
        $(".final").show();
    });
});



        