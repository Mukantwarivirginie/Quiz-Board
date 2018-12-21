$(document).ready(function() {
    $("#blanks form").submit(function() {
    var Question1 = $("input[name='Qestion1']:checked").val();    
    var Question2 = $("input[name='Qestion2']:checked").val();
    var Question3 = $("input[name='Qestion3']:checked").val();
    var Question4 = $("input[name='Qestion4']:checked").val();
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
         $(".final").show();
         $("display").text("your scole is:"+result)
    });
});



        