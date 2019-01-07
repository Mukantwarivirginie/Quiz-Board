$(document).ready(function() {
    $("input[type='button']").click(function(event) {

    var Question1 = $("input[name='Q1']:checked").val();    
    var Question2 = $("input[name='Q2']:checked").val();
    var Question3 = $("input[name='Q3']:checked").val();
    var Question4 = $("input[name='Q4']:checked").val();

    var total= 0;

    if (Question1==="C"){
        total+=15;
    }
    else {
        total+=0;
    }
    if (Question2=== "C"){
        total+=15;
    }
    else{
        total+=0
    }
      if (Question3=== "C"){
          total+=15;
      } 
      else{
          total+=0;
      }
     if (Question4=== "C"){
         total+=15;
     }
     else total+=0;
     
    
   $(".score").text("your score is " + total);
     event.preventDefault();  
    });
    
});





        