$(document).ready(function(){
     $('#span1').click(function(){
     $('input[name="your-firstname"]').css('background-color', 'white')
    });
    $('#span2').click(function(){
        $('input[name="your-lastname"]').css('background-color', 'white')
     });
     $('#span3').click(function(){
         $('input[name="your-email"]').css('background-color', 'white')
     });
     $('#span4').click(function(){
         $('input[name="your-phone"]').css('background-color', 'white')
     });
     $('#span5').click(function(){
         $('input[name="your-message"]').css('background-color', 'white')
     });


     function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
      

})